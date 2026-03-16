interface InputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

export const Input = ({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  className = "",
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-yellow-400 text-sm font-semibold tracking-wider">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-900 border border-yellow-700 text-white px-3 py-2 focus:outline-none focus:border-yellow-400 placeholder-gray-600"
      />
    </div>
  );
};
