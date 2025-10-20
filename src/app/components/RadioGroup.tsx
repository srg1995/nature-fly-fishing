"use client";
import React, { JSX, useState } from "react";
import { RadioGroupPaymentOption } from "../models/form";

interface RadioGroupProps {
  options: RadioGroupPaymentOption[];
}

export default function RadioGroup({ options }: RadioGroupProps): JSX.Element {
  const [selected, setSelected] = useState<string>(options[0].id);

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
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className="peer h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-green-500 bg-transparent transition-all duration-200 checked:border-green-500 checked:bg-green-500 focus:ring-2 focus:ring-green-300 focus:ring-offset-1"
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

      <p className="mt-4 text-sm text-gray-700">
        Método seleccionado: <strong>{selected}</strong>
      </p>
    </div>
  );
}
