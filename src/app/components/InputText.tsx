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
      <label htmlFor={label} className="text-tertiary text-sm font-semibold">
        {label}
      </label>
      <input
        type="text"
        id={label}
        name={label}
        className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
