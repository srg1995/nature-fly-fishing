"use client";
import React, { useEffect, useState } from "react";
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
  const [badges, setBadges] = useState(filters);

  useEffect(() => {
    setBadges(filters);
  }, [filters]);

  const toggleBadge = (id: number) => {
    setBadges((prev) =>
      prev.map((b) => (b.id === id ? { ...b, active: !b.active } : b)),
    );
  };

  useEffect(() => {
    onChangeFilters?.(badges);
  }, [badges, onChangeFilters]);

  return (
    <div className="flex flex-wrap gap-3 p-3 pr-4">
      {badges.map((badge) => (
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
