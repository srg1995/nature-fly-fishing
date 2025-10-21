import React, { JSX } from "react";
interface ButtonSecondaryProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}
export default function ButtonSecondary({
  text,
  onClick,
  disabled,
}: ButtonSecondaryProps): JSX.Element {
  return (
    <button
      className="text-foreground bg-secondary hover:bg-accent flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium transition hover:scale-105"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="truncate">{text}</span>
    </button>
  );
}
