import React from "react";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Book,
  Phone,
  MapPin,
  // ChevronRight,
  // ChevronDown,
  // Accessibility,
  Plus,
} from "lucide-react";
import { InputField } from "@/components/inputs";
import { useQuery } from "@tanstack/react-query";
import type { CheckAuthResponse } from "@/types/auth.type";
import { checkAuthUser } from "@/services/auth-services";
// import Cookies from "js-cookie";
import {
  UpdateLearnerTypeSchema,
  type UpdateLearnerFormData,
} from "@/schemas/learner-schema";
import { useUpdateLearner } from "@/hooks/update-learner-hook";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import CompletePurhase from "@/components/complete-purchase-form";
import { useSearchParams } from "react-router";

// Custom utility function for className merging
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const trackId = searchParams.get("id");
  const trackName = searchParams.get("track");
  // console.log(trackId);

  const { data: userInfo } = useQuery<CheckAuthResponse, Error>({
    queryKey: ["get-info"],
    queryFn: checkAuthUser,
    // enabled: !!Cookies.get("token"),
  });

  const info = userInfo?.user;

  const profileCompletionCheck =
    info?.disabled === undefined ||
    !info?.contact ||
    !info?.description ||
    !info?.location;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateLearnerFormData>({
    resolver: zodResolver(UpdateLearnerTypeSchema),
    values: {
      firstName: info?.firstName || "",
      lastName: info?.lastName || "",
      contact: info?.contact || "",
      location: info?.location || "",
      disabled: info?.disabled,
      description: info?.description || "",
    },
  });

  const { mutate: updateLearner, isPending } = useUpdateLearner();

  const onSubmit = async (data: UpdateLearnerFormData) => {
    updateLearner(data, {
      onSuccess(res) {
        console.log("🚀 ~ onSuccess ~ res:", res);
        toast.success("Profile updated successfully");
      },
      onError() {
        toast.error("Failed to update profile");
      },
    });
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="bg-[#01589A] text-white">
        <div className="text-center py-8">
          <h1 className="text-3xl font-medium">Checkout</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {profileCompletionCheck && (
          <div className="flex items-center justify-center ">
            <ul className="  text-[#77C053] mt-2 bg-green-50 border border-[#58e611] rounded-lg  py-2 list-disc w-120 px-15">
              <span>
                Please Complete Your Profile To Be Able To Enroll In A Track
              </span>
            </ul>
          </div>
        )}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-40 w-full bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Form Section */}
            <div className="lg:col-span-2  w-2xl">
              <div className=" rounded-lg shadow-sm border border-gray-200 p-6  w-full">
                <div className="space-y-2">
                  <InputField
                    name="firstName"
                    placeholder="First name"
                    register={register}
                    error={errors.firstName?.message}
                    required
                    iconLeft={<User className="h-5 w-5" />}
                  />

                  <InputField
                    name="lastName"
                    placeholder="Last name"
                    register={register}
                    error={errors.lastName?.message}
                    required
                    iconLeft={<User className="h-5 w-5" />}
                  />

                  <InputField
                    name="email"
                    type="email"
                    placeholder={info?.email}
                    register={register}
                    // error={errors?.message}
                    required
                    iconLeft={<Mail className="h-5 w-5" />}
                  />

                  <InputField
                    name="trackName"
                    placeholder={trackName as string}
                    register={register}
                    // error={errors.subject?.message}
                    iconLeft={<Book className="h-5 w-5" />}
                  />

                  {/* <DropdownField
                    name="gender"
                    placeholder="Gender"
                    options={genderOptions}
                    register={register}
                    error={errors.gender?.message}
                    iconLeft={<User className="h-5 w-5" />}
                  /> */}

                  <InputField
                    name="contact"
                    type="tel"
                    placeholder="Contact"
                    register={register}
                    error={errors.contact?.message}
                    iconLeft={<Phone className="h-5 w-5" />}
                  />

                  <InputField
                    name="location"
                    placeholder="Location"
                    register={register}
                    error={errors.location?.message}
                    iconLeft={<MapPin className="h-5 w-5" />}
                  />

                  <div className="mb-4 w-full">
                    <select
                      {...register("disabled")}
                      name="disabled"
                      className={cn(
                        "w-full h-10   border rounded-md shadow-sm overflow-y-auto ",
                        errors.disabled && "border-red-500 bg-red-50"
                      )}
                    >
                      <option value="">Do you have disability?</option>
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                    {errors.disabled && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.disabled.message}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      {...register("description")}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-transparent outline-none resize-none bg-gray-50"
                      placeholder="Enter description..."
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.description.message}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting || isPending}
                      className="bg-[#01589A] hover:bg-blue-200 cursor-pointer text-white px-6 py-3 rounded-sm font-medium flex items-center justify-center gap-2 transition-colors order-2 sm:order-1 mb-6 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                      {isSubmitting || isPending
                        ? "Saving..."
                        : "Update Profile"}
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Payment Summary */}
          <div className="lg:col-span-1 ">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Complete payment
            </h2>

            <CompletePurhase trackId={trackId as string} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
