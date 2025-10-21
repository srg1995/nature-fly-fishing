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
      className="text-foreground bg-secondary hover:bg-accent flex cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 py-2 text-sm leading-normal font-medium transition hover:scale-105"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </span>
      <span className="hidden truncate md:block">{text}</span>
    </button>
  );
}
