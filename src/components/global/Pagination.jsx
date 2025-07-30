import { useState } from "react";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";
export default function Pagination({pagnition,setPageNo}) {
  const currentPage = pagnition?.currentPage;
  const totalPages = pagnition?.totalPages;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page) => {
    setPageNo(page);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))}
        className="w-full p-3 text-base bg-transparent"
        aria-label="Previous Page"
      >
        <FaChevronLeft color="#979797" />
      </button>

      <div className="bg-[#0E0E0E] flex items-center rounded-[15px]">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-full px-4 py-2 text-base 
              ${
                currentPage == 1
                  ? "rounded-l-xl"
                  : currentPage == pages?.length
                  ? "rounded-r-xl"
                  : "rounded-xl"
              }              
              ${
                page === currentPage
                  ? "text-white bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91]"
                  : "text-[#6D6D6D]"
              }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => setPageNo((prev) => Math.min(prev + 1, totalPages))}
        className="w-full p-3 text-base bg-transparent"
        aria-label="Next Page"
      >
        <FaAngleRight color="#2F7EF7" />
      </button>
    </div>
  );
}
