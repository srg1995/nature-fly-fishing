"use client";
import React, { useState, useEffect } from "react";
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
  const [checkboxes, setCheckboxes] = useState(filters);

  const handleChange = (id: number) => {
    setCheckboxes((prev) =>
      prev.map((cb) => (cb.id === id ? { ...cb, active: !cb.active } : cb)),
    );
  };

  useEffect(() => {
    onChangeFilters?.(checkboxes);
  }, [checkboxes, onChangeFilters]);

  return (
    <div className="flex flex-col gap-2 px-4">
      {checkboxes.map((cb) => (
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
