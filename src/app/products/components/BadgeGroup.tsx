"use client";
import Badge from "@/app/components/Badge";
import React from "react";

interface BadgeGroupProps {
  filters: Badge[];
}

interface Badge {
  id: number;
  label: string;
  active: boolean;
}

export default function BadgeGroup({ filters }: BadgeGroupProps) {
  const [badgeData, setBadgeData] = React.useState<Badge[]>(() =>
    filters.map((badge) => ({
      id: badge.id,
      label: badge.label,
      active: false,
    })),
  );

  const handleBadgeClick = (badge: Badge) => {
    setBadgeData((prev) =>
      prev.map((b) =>
        b.label === badge.label ? { ...b, active: !b.active } : b,
      ),
    );
  };

  return (
    <div className="flex flex-wrap gap-3 p-3 pr-4">
      {badgeData.map((badge) => (
        <Badge
          key={badge.id}
          text={badge.label}
          active={badge.active}
          handleBadgeClick={() => handleBadgeClick(badge)}
        />
      ))}
    </div>
  );
}
