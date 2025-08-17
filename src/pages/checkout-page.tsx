import React, { useState, type ReactNode } from "react";
import {
  useForm,
  type UseFormRegister,
  type FieldErrors,
  type FieldValues,
} from "react-hook-form";
import {
  User,
  Mail,
  Book,
  Phone,
  MapPin,
  CreditCard,
  ChevronRight,
  ChevronDown,
  Accessibility,
} from "lucide-react";
import { InputField } from "@/components/inputs";

// Form data interface
interface CheckoutFormData {
  name: string;
  email: string;
  subject: string;
  gender: string;
  phone: string;
  location: string;
  paymentMethod: string;
  description: string;
  amount: string;
}

// Custom utility function for className merging
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

// DropdownField component props interface
interface DropdownFieldProps {
  label?: string;
  name: keyof CheckoutFormData;
  options: string[];
  placeholder: string;
  register: UseFormRegister<CheckoutFormData>;
  error?: string;
  required?: boolean;
  iconLeft?: ReactNode;
}

// Custom Dropdown component
const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  name,
  options,
  placeholder,
  register,
  error,
  required = false,
  iconLeft,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (value: string): void => {
    setSelectedValue(value);
    setIsOpen(false);
    // Update the form value
    const event = {
      target: { name, value },
    } as React.ChangeEvent<HTMLInputElement>;
    register(name).onChange(event);
  };

  return (
    <div className="mb-4 w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {iconLeft && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {iconLeft}
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full px-3 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent text-left flex items-center justify-between",
            iconLeft && "pl-10",
            "border-gray-200 bg-gray-50",
            error && "border-red-500 bg-red-50"
          )}
        >
          <span className={selectedValue ? "text-gray-900" : "text-gray-500"}>
            {selectedValue || placeholder}
          </span>
          <ChevronRight
            className={`h-5 w-5 text-gray-400 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {options.map((option: string) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        <input {...register(name)} type="hidden" value={selectedValue} />
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

const CheckoutPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CheckoutFormData>({
    defaultValues: {
      name: "John Doe",
      email: "johndoe@gmail.com",
      subject: "Data science",
      gender: "",
      phone: "",
      location: "",
      paymentMethod: "",
      description: "",
      amount: "100",
    },
  });

  const [showAmountDropdown, setShowAmountDropdown] = useState<boolean>(false);

  const genderOptions: string[] = [
    "Male",
    "Female",
    "Other",
    "Prefer not to say",
  ];
  const disabilityStatus: string[] = ["yes", "no"];
  const amountOptions: string[] = ["50", "100", "200", "350", "500"];

  const watchedAmount: string = watch("amount");

  const onSubmit = (data: CheckoutFormData): void => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  const handleAmountSelect = (amount: string): void => {
    setValue("amount", amount);
    setShowAmountDropdown(false);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                {/* <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Complete payment
                </h2> */}

                <div className="space-y-2">
                  <InputField
                    name="name"
                    placeholder="Full name"
                    register={register}
                    error={errors.name?.message}
                    required
                    iconLeft={<User className="h-5 w-5" />}
                  />

                  <InputField
                    name="email"
                    type="email"
                    placeholder="Email address"
                    register={register}
                    error={errors.email?.message}
                    required
                    iconLeft={<Mail className="h-5 w-5" />}
                  />

                  <InputField
                    name="subject"
                    placeholder="Subject"
                    register={register}
                    error={errors.subject?.message}
                    iconLeft={<Book className="h-5 w-5" />}
                  />

                  <DropdownField
                    name="gender"
                    placeholder="Gender"
                    options={genderOptions}
                    register={register}
                    error={errors.gender?.message}
                    iconLeft={<User className="h-5 w-5" />}
                  />

                  <InputField
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    register={register}
                    error={errors.phone?.message}
                    iconLeft={<Phone className="h-5 w-5" />}
                  />

                  <InputField
                    name="location"
                    placeholder="Location"
                    register={register}
                    error={errors.location?.message}
                    iconLeft={<MapPin className="h-5 w-5" />}
                  />

                  <DropdownField
                    name="paymentMethod"
                    placeholder="Do you have any disability?"
                    options={disabilityStatus}
                    register={register}
                    error={errors.paymentMethod?.message}
                    iconLeft={<Accessibility className="h-5 w-5" />}
                  />

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
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Complete payment
              </h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    $ {watchedAmount || "100"}.00 USD
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select amount
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowAmountDropdown(!showAmountDropdown)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-left flex items-center justify-between bg-gray-50"
                    >
                      <span>{watchedAmount || "100"}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          showAmountDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {showAmountDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        {amountOptions.map((option: string) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleAmountSelect(option)}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                          >
                            ${option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input {...register("amount")} type="hidden" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#01589A] hover:bg-blue-300 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Complete my purchase
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
