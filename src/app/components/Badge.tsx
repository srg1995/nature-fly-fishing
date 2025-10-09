import React, { JSX } from "react";
interface BadgeProps {
  text: string;
}
export default function Badge({ text }: BadgeProps): JSX.Element {
  return (
    <div className="bg-secondary flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4 transition hover:scale-105">
      <p className="text-primary text-sm leading-normal font-medium">{text}</p>
    </div>
  );
}
