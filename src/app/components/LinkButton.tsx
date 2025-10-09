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
      className="bg-secondary hover:bg-accent text-primary flex h-8 max-w-[480px] min-w-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg px-2.5 text-sm leading-normal font-bold tracking-[0.015em] transition hover:scale-105"
    >
      {children ? children : text}
    </Link>
  );
}
