import { useState } from "react";
import { Phone, MapPin, LogOut, Plus, User2, Lock } from "lucide-react";
import { InputField } from "./inputs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { ImageUpload } from "./image-upload";

export default function SettingsTab() {
  const {
    register,
    // handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
    watch,
  } = useForm({
    resolver: zodResolver,
  });

  const selectedImage = watch("image");

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    location: "",
    image: "",
  });

  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    console.log("Saving changes...", { profile, passwords });
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between max-w-7xl mx-auto">
        {/* <div>gyhjjh</div> */}
        <div className="w-full lg:w-auto flex-shrink-0">
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
        </div>
        <div className="w-full lg:w-4/6 flex-1">
          {/* Profile Section */}
          <div className="bg-[#F5F5F5] rounded-sm shadow-sm p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
            {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8"></div> */}

            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Profile
            </h2>

            {/* Profile Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <InputField
                name="phone"
                type="tel"
                placeholder="First Name"
                register={register}
                error={errors.phone?.message}
                iconLeft={<User2 className="h-4 w-4 sm:h-5 sm:w-5" />}
              />

              <InputField
                name="phone"
                type="tel"
                placeholder="Last Name"
                register={register}
                error={errors.phone?.message}
                iconLeft={<User2 className="h-4 w-4 sm:h-5 sm:w-5" />}
              />

              <InputField
                name="phone"
                type="tel"
                placeholder="Phone"
                register={register}
                error={errors.phone?.message}
                iconLeft={<Phone className="h-4 w-4 sm:h-5 sm:w-5" />}
              />
              <InputField
                name="phone"
                type="tel"
                placeholder="Location"
                register={register}
                error={errors.phone?.message}
                iconLeft={<MapPin className="h-4 w-4 sm:h-5 sm:w-5" />}
              />
            </div>
          </div>

          {/* Change Password Section */}
          <div className="bg-[#F5F5F5] rounded-sm shadow-sm p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Change Password
            </h2>

            {/* Password Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <InputField
                name="phone"
                type="tel"
                placeholder="New Password"
                register={register}
                error={errors.phone?.message}
                iconLeft={<Lock className="h-4 w-4 sm:h-5 sm:w-5" />}
              />
              <InputField
                name="phone"
                type="tel"
                placeholder="Confirm Password"
                register={register}
                error={errors.phone?.message}
                iconLeft={<Lock className="h-4 w-4 sm:h-5 sm:w-5" />}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
            <button
              onClick={handleSaveChanges}
              className="bg-[#01589A] hover:bg-blue-200 cursor-pointer text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-sm text-sm sm:text-base font-medium flex items-center justify-center gap-2 transition-colors order-2 sm:order-1"
            >
              Save changes
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={handleLogout}
              className="bg-[#E6E6E6] hover:bg-gray-200 text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-sm text-sm sm:text-base font-medium flex items-center justify-center gap-2 transition-colors order-1 sm:order-2 cursor-pointer"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
