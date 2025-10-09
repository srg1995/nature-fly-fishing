"use client";
import React, { JSX } from "react";

export default function Skeleton(): JSX.Element {
  return (
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))] gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-xl bg-gray-200 shadow-lg dark:bg-gray-700"
        >
          {/* Imagen simulada */}
          <div className="h-[220px] w-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />

          {/* Capa con texto simulada */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4">
            <div className="mb-3 h-5 w-3/4 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
            <div className="mb-2 h-4 w-2/3 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-6 w-1/4 animate-pulse rounded bg-gray-400 dark:bg-gray-500"></div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -468px 0;
          }
          100% {
            background-position: 468px 0;
          }
        }
        .animate-[shimmer_1.5s_infinite] {
          background-size: 800px 104px;
          animation: shimmer 1.5s infinite linear forwards;
        }
      `}</style>
    </div>
  );
}
