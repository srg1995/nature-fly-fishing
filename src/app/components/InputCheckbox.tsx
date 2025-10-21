"use client";
import React, { JSX } from "react";
interface InputProps {
  text: string;
  checked?: boolean;
  onChange?: () => void;
}

export default function InputCheckbox({
  text,
  checked,
  onChange,
}: InputProps): JSX.Element {
  return (
    <label className="relative inline-flex cursor-pointer items-center gap-2 select-none">
      <input
        type="checkbox"
        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-green-500 transition-all duration-200 checked:border-green-500 checked:bg-green-500 hover:scale-105 focus:ring-2 focus:ring-green-300 focus:ring-offset-1"
        checked={checked}
        onChange={onChange}
      />
      <svg
        className="pointer-events-none absolute size-5 text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span className="text-tertiary text-base">{text}</span>
    </label>
  );
}
