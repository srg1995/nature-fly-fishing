"use client";
import React, { JSX, useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputTextProps {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  register?: UseFormRegisterReturn;
  error?: string;
}

export default function Textarea({
  id,
  label,
  placeholder = "",
  value,
  onChange,
  register,
  error,
}: InputTextProps): JSX.Element {
  const [messageCharacters, setMessageCharacters] = useState(0);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-tertiary text-sm font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={`form-input text-tertiary placeholder:text-tertiary flex w-full min-w-0 flex-1 rounded-lg border px-4 py-2 text-base leading-normal focus:outline-none ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-300"
            : "border-accent focus:ring-accent focus:ring-2"
        }`}
        {...(register ? register : {})}
        onChange={(e) => {
          onChange?.(e.target.value);
          setMessageCharacters(e.target.value.length);
        }}
        maxLength={500}
        value={register ? undefined : value}
      ></textarea>
      <label htmlFor="message" className="text-xs" aria-invalid={!!error}>
        {messageCharacters}/500
      </label>

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
