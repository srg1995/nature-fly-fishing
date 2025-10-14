"use client";
import InputCheckbox from "@/app/components/InputCheckbox";
import React, { JSX } from "react";
interface CheckboxGroupProps {
  filters: checkbox[];
}
interface checkbox {
  id: number;
  name: string;
  active: boolean;
}

export default function CheckboxGroup({
  filters,
}: CheckboxGroupProps): JSX.Element {
  const [checkboxesData, setCheckboxesData] = React.useState<checkbox[]>(() =>
    filters.map((filter) => ({
      id: filter.id,
      name: filter.name,
      active: false,
    })),
  );

  const handleCheckboxChange = (id: number) => {
    setCheckboxesData((prev) =>
      prev.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, active: !checkbox.active }
          : checkbox,
      ),
    );
  };

  return (
    <div className="flex flex-col gap-2 px-4">
      {checkboxesData.map((checkbox) => (
        <InputCheckbox
          key={checkbox.id}
          text={checkbox.name}
          checked={checkbox.active}
          onChange={() => handleCheckboxChange(checkbox.id)}
        />
      ))}
    </div>
  );
}
