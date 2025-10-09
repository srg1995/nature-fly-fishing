import Link from "next/link";
import React, { JSX } from "react";
interface LinkProps {
  href: string;
  text?: string;
  children?: React.ReactNode;
}
export default function LinkPrimary({
  href,
  text,
  children,
}: LinkProps): JSX.Element {
  return (
    <Link
      href={href}
      className="text-primary hover:text-tertiary text-sm leading-normal font-bold transition hover:scale-105"
    >
      {children ? children : text}
    </Link>
  );
}
