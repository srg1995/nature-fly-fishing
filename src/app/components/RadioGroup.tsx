"use client";
import React, { JSX } from "react";
import { RadioGroupOption } from "@/app/models/form";

interface RadioGroupProps {
  options: RadioGroupOption[];
  children?: React.ReactNode;
  selectedOption?: number;
  onChange: (id: number) => void;
}

export default function RadioGroup({
  options,
  children,
  selectedOption,
  onChange,
}: RadioGroupProps): JSX.Element {
  return (
    <div className="col-span-3 flex flex-col gap-3 p-4">
      {options.map((option) => (
        <label
          key={option.id}
          className="border-secondary relative inline-flex cursor-pointer items-center gap-4 rounded-lg border p-[15px] transition-all duration-200 select-none hover:scale-[1.02]"
        >
          <div className="relative flex h-[20px] w-[20px] shrink-0 items-center justify-center">
            <input
              type="radio"
              name="payment"
              value={option.id}
              disabled={option.disabled}
              checked={selectedOption === option.id}
              onChange={() => onChange(option.id)}
              className="text-foreground peer h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-green-500 bg-transparent transition-all duration-200 checked:border-green-500 checked:bg-green-500 focus:ring-2 focus:ring-green-300 focus:ring-offset-1 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-slate-200 disabled:opacity-50"
            />

            <svg
              className="pointer-events-none absolute left-[2px] h-[16px] w-[16px] text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="6" fill="currentColor" />
            </svg>
          </div>
          <div className="ml-6 flex grow flex-col">
            <p className="text-primary text-sm leading-normal font-medium">
              {option.label}
            </p>
          </div>
        </label>
      ))}

      {children}
    </div>
  );
}
