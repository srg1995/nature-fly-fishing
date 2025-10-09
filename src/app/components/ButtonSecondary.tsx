import React, { JSX } from "react";
interface ButtonSecondaryProps {
  text: string;
}
export default function ButtonSecondary({
  text,
}: ButtonSecondaryProps): JSX.Element {
  return (
    <button className="text-primary bg-secondary hover:bg-accent flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium transition hover:scale-105">
      <span className="truncate">{text}</span>
    </button>
  );
}
