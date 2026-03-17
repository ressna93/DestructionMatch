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
        <label className="text-yellow-600 dark:text-yellow-400 text-sm font-semibold tracking-wider">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-white dark:bg-gray-900 border border-yellow-400 dark:border-yellow-700 text-slate-900 dark:text-white px-3 py-2 focus:outline-none focus:border-yellow-500 dark:focus:border-yellow-400 placeholder-slate-400 dark:placeholder-gray-600"
      />
    </div>
  );
};
