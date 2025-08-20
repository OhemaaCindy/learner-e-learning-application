// import { useState } from "react";
// import { User, Phone, MapPin, LogOut, Plus, User2, Lock } from "lucide-react";
// import { InputField } from "./inputs";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
// import { ImageUpload } from "./image-upload";
// import {
//   UpdateLearnerTypeSchema,
//   type UpdateLearnerFormData,
// } from "@/schemas/learner-schema";
// import toast from "react-hot-toast";
// import { useUpdateLearner } from "@/hooks/update-learner-hook";

// export default function SettingsTab() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//     setValue,
//     watch,
//   } = useForm<UpdateLearnerFormData>({
//     resolver: zodResolver(UpdateLearnerTypeSchema),
//     defaultValues: {
//       name: "",
//       price: "",
//       duration: "",
//       instructor: "",
//       // Add this to your defaultValues
//       description: "",
//     },
//   });
//   const selectedImage = watch("image");

//   const {
//     mutate: updateLearner,
//     isPending,
//     // error,
//     // isError,
//     // data,
//   } = useUpdateLearner();

//   const onSubmit = async (data: UpdateLearnerFormData) => {
//     // console.log("🚀 ~ onSubmit ~ data:", data),
//     updateLearner(data, {
//       onSuccess(res) {
//         console.log("🚀 ~ onSuccess ~ res:", res);
//         reset();
//         // closeModal(false);
//         toast.success("Profile updated successfully");
//       },
//       onError() {
//         // console.log("error");
//         toast.error("Failed to update profile");
//       },
//     });
//   };

//   const handleSaveChanges = () => {};

//   const handleLogout = () => {};

//   return (
//     <div className="min-h-screen  py-6 px-4 sm:px-6 lg:px-8 mt-8">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className=" flex  justify-between max-w-7xl mx-auto ">
//           <ImageUpload
//             value={selectedImage}
//             onImageSelect={(file) => setValue("image", file)}
//             error={errors.image?.message}
//             maxSize={5}
//             // placeholder="Upload course image"
//             accept="image/*"
//             showPreview={true}
//             profile
//           />
//           <div className=" w-4/6">
//             {/* Profile Section */}
//             <div className="bg-[#F5F5F5] rounded-sm shadow-sm p-6 sm:p-8 mb-8">
//               {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8"></div> */}

//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
//                 Profile
//               </h2>

//               {/* Profile Form */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                 <InputField
//                   name="firstName"
//                   type="text"
//                   placeholder="First Name"
//                   register={register}
//                   error={errors.firstName?.message}
//                   iconLeft={<User2 className="h-5 w-5" />}
//                 />

//                 <InputField
//                   name="lastName"
//                   type="text"
//                   placeholder="Last Name"
//                   register={register}
//                   error={errors.lastName?.message}
//                   iconLeft={<User2 className="h-5 w-5" />}
//                 />

//                 <InputField
//                   name="phone"
//                   type="tel"
//                   placeholder="Phone"
//                   register={register}
//                   error={errors.contact?.message}
//                   iconLeft={<Phone className="h-5 w-5" />}
//                 />
//                 <InputField
//                   name="location"
//                   type="tel"
//                   placeholder="Location"
//                   register={register}
//                   error={errors.location?.message}
//                   iconLeft={<MapPin className="h-5 w-5" />}
//                 />
//               </div>
//             </div>
//             <button
//               onClick={handleSaveChanges}
//               className="bg-[#01589A] hover:bg-blue-200 cursor-pointer text-white px-6 py-3 rounded-sm font-medium flex items-center justify-center gap-2 transition-colors order-2 sm:order-1 mb-6"
//             >
//               Save changes
//               <Plus className="w-5 h-5" />
//             </button>
//             {/* Change Password Section */}
//             <div className="bg-[#F5F5F5] rounded-sm shadow-sm p-6 sm:p-8 mb-8">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
//                 Change Password
//               </h2>

//               {/* Password Fields */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                 <InputField
//                   name="phone"
//                   type="tel"
//                   placeholder="New Password"
//                   register={register}
//                   error={errors.phone?.message}
//                   iconLeft={<Lock className="h-5 w-5" />}
//                 />
//                 <InputField
//                   name="phone"
//                   type="tel"
//                   placeholder="Confirm Password"
//                   register={register}
//                   error={errors.phone?.message}
//                   iconLeft={<Lock className="h-5 w-5" />}
//                 />
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-between">
//               <button
//                 onClick={handleSaveChanges}
//                 className="bg-[#01589A] hover:bg-blue-200 cursor-pointer text-white px-6 py-3 rounded-sm font-medium flex items-center justify-center gap-2 transition-colors order-2 sm:order-1"
//               >
//                 Save changes
//                 <Plus className="w-5 h-5" />
//               </button>

//               <button
//                 onClick={handleLogout}
//                 className="bg-[#E6E6E6] hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-sm font-medium flex items-center justify-center gap-2 transition-colors order-1 sm:order-2 cursor-pointer"
//               >
//                 <LogOut className="w-5 h-5" />
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
import { Phone, MapPin, LogOut, Plus, User2, Lock, Map } from "lucide-react";
import { InputField } from "./inputs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { ImageUpload } from "./image-upload";
import {
  UpdateLearnerTypeSchema,
  type UpdateLearnerFormData,
} from "@/schemas/learner-schema";
import toast from "react-hot-toast";
import { useUpdateLearner } from "@/hooks/update-learner-hook";
import { checkAuthUser } from "@/services/auth-services";
import type { CheckAuthResponse } from "@/types/auth.type";
import { useQuery } from "@tanstack/react-query";

export default function SettingsTab() {
  // Profile Form

  const { data: userInfo } = useQuery<CheckAuthResponse, Error>({
    queryKey: ["get-info"],
    queryFn: checkAuthUser,
  });

  const info = userInfo?.user;
  console.log("🚀 ~ SettingsTab ~ info:", info);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
    setValue,
    watch,
  } = useForm<UpdateLearnerFormData>({
    resolver: zodResolver(UpdateLearnerTypeSchema),
    defaultValues: {
      firstName: info?.firstName || "",
      lastName: info?.lastName || "",
      contact: info?.contact || "",
      location: info?.location || "",
    },
  });
  const selectedImage = watch("image");
  const id = info?._id;
  console.log("🚀 ~ SettingsTab ~ id:", id);
  const { mutate: updateLearner, isPending } = useUpdateLearner();

  const onSubmit = async (data: UpdateLearnerFormData) => {
    updateLearner(
      { payload: data, id: id as string },
      {
        onSuccess(res) {
          console.log("🚀 ~ onSuccess ~ res:", res);
          toast.success("Profile updated successfully");
        },
        onError() {
          toast.error("Failed to update profile");
        },
      }
    );
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex justify-between max-w-7xl mx-auto">
        <ImageUpload
          value={selectedImage}
          onImageSelect={(file) => setValue("image", file)}
          error={errors.image?.message}
          maxSize={5}
          // placeholder="Upload course image"
          accept="image/*"
          showPreview={true}
          profile
        />

        <div className="w-4/6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Profile Form */}
            <div className="bg-[#F5F5F5] rounded-sm shadow-sm p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Profile
              </h2>

              {/* Profile Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <InputField
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  register={register}
                  error={errors.firstName?.message}
                  iconLeft={<User2 className="h-5 w-5" />}
                />

                <InputField
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  register={register}
                  error={errors.lastName?.message}
                  iconLeft={<User2 className="h-5 w-5" />}
                />

                <InputField
                  name="contact"
                  type="text"
                  placeholder="Contact"
                  register={register}
                  error={errors.contact?.message}
                  iconLeft={<Phone className="h-5 w-5" />}
                />

                <InputField
                  name="location"
                  type="text"
                  placeholder="Location"
                  register={register}
                  error={errors.location?.message}
                  iconLeft={<MapPin className="h-5 w-5" />}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isPending}
              className="bg-[#01589A] hover:bg-blue-200 cursor-pointer text-white px-6 py-3 rounded-sm font-medium flex items-center justify-center gap-2 transition-colors order-2 sm:order-1 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting || isPending ? "Saving..." : "Save Profile Changes"}
              <Plus className="w-5 h-5" />
            </button>
          </form>

          {/* Change Password Form */}
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-[#F5F5F5] rounded-sm shadow-sm p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Change Password
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <InputField
                  name="phone"
                  type="tel"
                  placeholder="New Password"
                  register={register}
                  error={errors.phone?.message}
                  iconLeft={<Lock className="h-5 w-5" />}
                />
                <InputField
                  name="phone"
                  type="tel"
                  placeholder="New Password"
                  register={register}
                  error={errors.phone?.message}
                  iconLeft={<Lock className="h-5 w-5" />}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#01589A] hover:bg-blue-200 cursor-pointer text-white px-6 py-3 rounded-sm font-medium flex items-center justify-center gap-2 transition-colors order-2 sm:order-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Updating..." : "Update Password"}
                <Plus className="w-5 h-5" />
              </button>

              <button
                type="button"
                className="bg-[#E6E6E6] hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-sm font-medium flex items-center justify-center gap-2 transition-colors order-1 sm:order-2 cursor-pointer"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}
