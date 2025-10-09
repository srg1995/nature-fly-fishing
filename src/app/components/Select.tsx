import React, { JSX } from "react";
interface SelectProps {
  options: string[];
}
export default function Select({ options }: SelectProps): JSX.Element {
  return (
    <label className="flex min-w-40 flex-1 flex-col">
      <select className="form-input text-primary placeholder:text-secondary border-secondary focus:border-secondary flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border bg-[#f8fbfa] bg-[image:--select-button-svg] p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
