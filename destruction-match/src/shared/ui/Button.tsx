type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const base =
    "px-4 py-2 font-bold tracking-wider transition-all duration-200 border disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-yellow-600 border-yellow-400 text-black hover:bg-yellow-400",
    secondary:
      "bg-transparent border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-black",
    danger: "bg-red-800 border-red-600 text-white hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
