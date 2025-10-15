"use client";
import React from "react";
import InputCheckbox from "@/app/components/InputCheckbox";
import { Type } from "@/app/models/type";

interface CheckboxGroupProps {
  filters: Type[];
  onChangeFilters?: (updated: Type[]) => void;
}

export default function CheckboxGroup({
  filters,
  onChangeFilters,
}: CheckboxGroupProps) {
  const handleChange = (id: number) => {
    const updated = filters.map((cb) =>
      cb.id === id ? { ...cb, active: !cb.active } : cb,
    );
    onChangeFilters?.(updated);
  };

  return (
    <div className="flex flex-col gap-2 px-4">
      {filters.map((cb) => (
        <InputCheckbox
          key={cb.id}
          text={cb.name}
          checked={cb.active}
          onChange={() => handleChange(cb.id)}
        />
      ))}
    </div>
  );
}
