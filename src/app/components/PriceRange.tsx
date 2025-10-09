"use client";
import { useState } from "react";

interface RangeProps {
  min: number;
  max: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
}

export default function PriceRange({
  min,
  max,
  step = 1,
  value,
  onChange,
}: RangeProps) {
  const [val, setVal] = useState(value ?? min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVal(v);
    onChange?.(v);
  };

  return (
    <div className="w-full max-w-md">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={handleChange}
        className="h-2 w-full cursor-pointer rounded-lg bg-gray-200 accent-green-500 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-green-600 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600"
      />
    </div>
  );
}
