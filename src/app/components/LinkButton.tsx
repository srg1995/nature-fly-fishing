import Link from "next/link";
import React, { JSX } from "react";
interface LinkButtonProps {
  href: string;
  text?: string;
  children?: React.ReactNode;
}
export default function LinkButton({
  href,
  text,
  children,
}: LinkButtonProps): JSX.Element {
  return (
    <Link
      href={href}
      className="bg-secondary hover:bg-accent flex w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg px-4 py-2 text-sm leading-normal tracking-[0.015em] transition hover:scale-105"
    >
      {children ? children : text}
    </Link>
  );
}
