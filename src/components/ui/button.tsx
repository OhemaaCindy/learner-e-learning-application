interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  variant = "primary",
  children,
  disabled = false,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-[#01589A] text-white hover:bg-[#0172C0] focus:ring-blue-100 disabled:bg-blue-300",
    secondary:
      "bg-[ffffff] text-[#01589A] hover:bg-blue-100  focus:ring-blue-100 disabled:bg-gray-100",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
