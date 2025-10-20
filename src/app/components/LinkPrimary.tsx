import Link from "next/link";
import React, { JSX } from "react";
interface LinkProps {
  href: string;
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
export default function LinkPrimary({
  href,
  text,
  children,
  onClick,
}: LinkProps): JSX.Element {
  return (
    <Link
      href={href}
      className="text-tertiary hover:text-accent text-sm leading-normal font-bold transition hover:scale-105"
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {children ? children : text}
    </Link>
  );
}
