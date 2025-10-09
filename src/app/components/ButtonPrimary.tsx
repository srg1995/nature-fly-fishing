import React, { JSX } from "react";
interface ButtonPrimaryProps {
  text: string;
}
export default function ButtonPrimary({
  text,
}: ButtonPrimaryProps): JSX.Element {
  return (
    <button className="text-primary bg-secondary flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium">
      <span className="truncate">{text}</span>
    </button>
  );
}
