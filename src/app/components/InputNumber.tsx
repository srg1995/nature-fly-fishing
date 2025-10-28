import React, { JSX } from "react";

interface InputTextProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: number) => void;
  min: number;
  max: number;
}
export default function InputNumber({
  label,
  placeholder,
  value,
  onChange,
  min,
  max,
}: InputTextProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-foreground text-sm font-medium">
        {label}
      </label>
      <input
        type="number"
        id={label}
        name={label}
        value={value}
        min={min}
        max={max}
        className="form-input text-tertiary placeholder:text-tertiary flex w-full min-w-0 flex-1 rounded-lg border px-4 py-2 text-base leading-normal focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => onChange?.(parseInt(e.target.value))}
      />
    </div>
  );
}
