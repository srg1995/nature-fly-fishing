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
      className="bg-accent text-primary hover:bg-accent/90 active:ring-primary flex w-full cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 py-2 text-sm leading-normal font-semibold transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="truncate">{text}</span>
    </button>
  );
}
