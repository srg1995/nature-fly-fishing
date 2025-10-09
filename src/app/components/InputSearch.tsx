import React, { JSX } from "react";
interface InputSearchProps {
  text: string;
}
export default function InputSearch({ text }: InputSearchProps): JSX.Element {
  return (
    <input
      placeholder={text}
      className="form-input text-primary placeholder:text-tertiary bg-secondary flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-l-0 border-none px-4 pl-2 text-base leading-normal font-normal focus:border-none focus:ring-0 focus:outline-0"
    />
  );
}
