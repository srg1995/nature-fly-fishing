import React, { JSX } from "react";
interface ButtonPrimaryProps {
  text: string;
  onClick?: () => void;
}
export default function ButtonPrimary({
  text,
  onClick,
}: ButtonPrimaryProps): JSX.Element {
  return (
    <button
      className="text-primary bg-secondary flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium"
      onClick={onClick}
    >
      <span className="truncate">{text}</span>
    </button>
  );
}
