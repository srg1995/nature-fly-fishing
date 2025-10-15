import React, { JSX } from "react";
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps): JSX.Element {
  if (totalPages <= 1) return <></>;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const getVisiblePages = () => {
    const pages: number[] = [];
    const maxVisible = 3;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    if (end - start < maxVisible - 1) {
      if (currentPage < totalPages / 2) {
        end = Math.min(totalPages, start + maxVisible - 1);
      } else {
        start = Math.max(1, end - maxVisible + 1);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();
  return (
    <div className="flex items-center justify-center p-4 select-none">
      {/* Botón anterior */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`flex size-10 items-center justify-center ${
          currentPage === 1 ? "cursor-not-allowed opacity-40" : "cursor-pointer"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="text-primary"
        >
          <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
        </svg>
      </button>

      {/* Páginas visibles */}
      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="text-primary flex size-10 items-center justify-center rounded-full text-sm font-normal"
          >
            1
          </button>
          {visiblePages[0] > 2 && (
            <span className="text-primary flex size-10 items-center justify-center text-sm font-normal">
              ...
            </span>
          )}
        </>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex size-10 items-center justify-center rounded-full text-sm font-semibold transition ${
            page === currentPage
              ? "bg-secondary text-primary font-bold"
              : "text-primary hover:bg-secondary/40"
          }`}
        >
          {page}
        </button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="text-primary flex size-10 items-center justify-center text-sm font-normal">
              ...
            </span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="text-primary flex size-10 items-center justify-center rounded-full text-sm font-normal"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Botón siguiente */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex size-10 items-center justify-center ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-40"
            : "cursor-pointer"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="text-primary"
        >
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      </button>
    </div>
  );
}
