import React, { JSX } from "react";

interface InputTextProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function InputText({
  label,
  placeholder = "",

  onChange,
}: InputTextProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-primary text-sm font-medium">
        {label}
      </label>
      <input
        type="text"
        id={label}
        name={label}
        className="focus:ring-primary focus:border-primary w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 transition focus:ring-2 focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
