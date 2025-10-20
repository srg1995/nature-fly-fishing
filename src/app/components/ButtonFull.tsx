import React, { JSX } from "react";
interface ButtonFullProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}
export default function ButtonFull({
  text,
  onClick,
  disabled,
}: ButtonFullProps): JSX.Element {
  return (
    <button
      className="text-primary bg-accent hover:bg-accent flex w-full cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 py-2 text-sm leading-normal font-semibold transition hover:scale-105"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="truncate">{text}</span>
    </button>
  );
}
