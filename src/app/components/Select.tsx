import React, { JSX } from "react";
interface SelectProps {
  options?: string[];
  onChange?: (value: number) => void;
  children?: React.ReactNode;
}
export default function Select({
  options,
  onChange,
  children,
}: SelectProps): JSX.Element {
  return (
    <label className="flex min-w-40 flex-1 flex-col">
      <select
        className="text-foreground form-input placeholder:text-secondary border-secondary focus:border-secondary flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border bg-[#f8fbfa] bg-[image:--select-button-svg] px-4 py-3 text-base leading-normal font-normal focus:ring-0 focus:outline-0"
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
    </label>
  );
}
