"use client";
import React, { JSX, useEffect, useRef, useState } from "react";

interface DropdownProps {
  title?: string;
  children: React.ReactNode;
  isopen?: boolean;
}
export default function Dropdown({
  title = "titulo",
  children,
  isopen = false,
}: DropdownProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(isopen);
  const [height, setHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open]);
  return (
    <div className="mb-4">
      <div className="overflow-hidden">
        <button
          onClick={handleToggle}
          className="bg-secondary text-tertiary hover:bg-secondary/80 flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left font-semibold transition"
        >
          {title}
          <svg
            className={`h-5 w-5 transform transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          ref={contentRef}
          style={{ height }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="bg-white px-4 py-3 text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
}
