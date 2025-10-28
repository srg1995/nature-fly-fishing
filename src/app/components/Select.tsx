import React, { JSX } from "react";
interface SelectProps {
  label?: string;
  options?: string[];
  onChange?: (value: number) => void;
  children?: React.ReactNode;
}
export default function Select({
  label,
  options,
  onChange,
  children,
}: SelectProps): JSX.Element {
  return (
    <>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor={label} className="text-foreground text-sm font-medium">
          {label}
        </label>
        <select
          id={label}
          name={label}
          className="text-tertiary form-input placeholder:text-secondary flex w-full min-w-0 resize-none overflow-hidden rounded-lg border bg-[#f8fbfa] bg-[image:--select-button-svg] px-4 py-3 text-base leading-normal font-normal focus:ring-0 focus:outline-0"
          onChange={(e) => onChange?.(parseInt(e.target.value))}
        >
          {children
            ? children
            : options?.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
        </select>
      </div>
    </>
  );
}
