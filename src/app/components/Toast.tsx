"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose?: () => void;
}

export default function Toast({
  message,
  type = "success",
  duration = 3000,
  onClose,
}: ToastProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose?.(), 400);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!mounted) return null;

  const bgColor =
    type === "success"
      ? "bg-background"
      : type === "error"
        ? "bg-red-600"
        : "bg-blue-600";

  return createPortal(
    <div
      className={`text-foreground border-foreground/30 fixed top-20 right-6 z-[9999] transform rounded-lg border px-5 py-3 shadow-lg transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "-translate-y-2 scale-95 opacity-0"
      } ${bgColor}`}
    >
      {message}
    </div>,
    document.body,
  );
}
