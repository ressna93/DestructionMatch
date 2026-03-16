type BadgeColor = "gold" | "blue" | "red" | "gray";

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
}

export const Badge = ({ children, color = "gold" }: BadgeProps) => {
  const colors: Record<BadgeColor, string> = {
    gold: "bg-yellow-700 text-yellow-200 border-yellow-500",
    blue: "bg-blue-900 text-blue-200 border-blue-500",
    red: "bg-red-900 text-red-200 border-red-500",
    gray: "bg-gray-700 text-gray-200 border-gray-500",
  };

  return (
    <span className={`px-2 py-0.5 text-xs font-bold border ${colors[color]}`}>
      {children}
    </span>
  );
};
