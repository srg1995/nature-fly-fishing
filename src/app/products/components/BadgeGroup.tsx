"use client";
import React from "react";
import Badge from "@/app/components/Badge";
import { Size } from "@/app/models/size";

interface BadgeGroupProps {
  filters: Size[];
  onChangeFilters?: (updated: Size[]) => void;
}

export default function BadgeGroup({
  filters,
  onChangeFilters,
}: BadgeGroupProps) {
  const toggleBadge = (id: number) => {
    const updated = filters.map((b) =>
      b.id === id ? { ...b, active: !b.active } : b,
    );
    onChangeFilters?.(updated);
  };

  return (
    <div className="flex flex-wrap gap-3 p-3 pr-4">
      {filters.map((badge) => (
        <Badge
          key={badge.id}
          text={badge.label}
          active={badge.active}
          handleBadgeClick={() => toggleBadge(badge.id)}
        />
      ))}
    </div>
  );
}
