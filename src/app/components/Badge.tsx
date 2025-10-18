"use client";
import React, { JSX } from "react";
interface BadgeProps {
  text: string;
  active?: boolean;
  handleBadgeClick?: () => void;
}
export default function Badge({
  text,
  active,
  handleBadgeClick,
}: BadgeProps): JSX.Element {
  return (
    <div
      className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4 transition hover:scale-105 ${!active ? "bg-secondary" : "bg-accent"}`}
      onClick={handleBadgeClick}
    >
      <p className="text-primary text-sm leading-normal font-medium">#{text}</p>
    </div>
  );
}
