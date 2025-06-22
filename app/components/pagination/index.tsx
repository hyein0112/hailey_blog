"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { RiArrowLeftDoubleLine, RiArrowLeftSLine, RiArrowRightDoubleLine, RiArrowRightSLine } from "react-icons/ri";

type PaginationProps = {
  pageIndex: number;
  tag: string;
  totalPages: number;
  currentPage: number;
};

const Pagination = ({ totalPages, tag, pageIndex, currentPage: page = 1 }: PaginationProps) => {
  const [currentPageGroup, setCurrentPageGroup] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const pages: number[][] = Array.from({ length: Math.ceil(totalPages / 5) }, (_, i) =>
    Array.from({ length: 5 }, (_, j) => i * 5 + j + 1).filter((num) => num <= totalPages),
  );

  useEffect(() => {
    setCurrentPage(pageIndex % 5 || 0);
    setCurrentPageGroup(Math.floor(pageIndex / 5) || 0);
  }, [pageIndex]);

  // Disable 조건들
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <div className="mt-4 flex justify-between gap-4">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center dark:text-white mb-[-4px]">
          <Link
            href={isFirstPage ? {} : `/blog?searchTag=${tag}&page=${1}`}
            aria-label="leftDouble"
            type="button"
            className={`transition-opacity ${isFirstPage ? "opacity-30 cursor-not-allowed" : "hover:opacity-70"}`}
            onClick={(e) => {
              if (isFirstPage) {
                e.preventDefault();
                return;
              }
              setCurrentPageGroup(0);
              setCurrentPage(0);
            }}>
            <RiArrowLeftDoubleLine size={24} color="gray" />
          </Link>
          <Link
            href={isFirstPage ? {} : `/blog?searchTag=${tag}&page=${page - 1}`}
            aria-label="left"
            type="button"
            className={`transition-opacity ${isFirstPage ? "opacity-30 cursor-not-allowed" : "hover:opacity-70"}`}
            onClick={(e) => {
              if (isFirstPage) {
                e.preventDefault();
                return;
              }
              console.log(currentPage);
              if (currentPageGroup === 0 && currentPage === 0) return;
              if (currentPage === 0) {
                setCurrentPageGroup((prev) => prev - 1);
                setCurrentPage(4);
              } else {
                setCurrentPage((prev) => prev - 1);
              }
            }}>
            <RiArrowLeftSLine size={24} color="gray" />
          </Link>
        </div>

        <div className="flex items-center justify-center dark:text-white">
          {pages &&
            pages[currentPageGroup]?.map((page, index) => {
              return (
                <Link
                  href={`/blog?searchTag=${tag}&page=${page}`}
                  key={`${page}_${index}`}
                  className={`flex h-10 w-10 items-center justify-center p-4 ${
                    currentPage + 1 === page ? "bg-green-500 rounded-full text-white" : "text-gray-600"
                  }`}
                  aria-label={`${page}페이지로 이동`}
                  onClick={() => {
                    setCurrentPage(index);
                    console.log(index, currentPageGroup);
                  }}>
                  {page}
                </Link>
              );
            })}
        </div>

        <div className="flex items-center justify-center dark:text-white mb-[-4px]">
          <Link
            href={isLastPage ? {} : `/blog?searchTag=${tag}&page=${Number(page) + 1}`}
            type="button"
            aria-label="right"
            className={`transition-opacity ${isLastPage ? "opacity-30 cursor-not-allowed" : "hover:opacity-70"}`}
            onClick={(e) => {
              if (isLastPage) {
                e.preventDefault();
                return;
              }
              if (pages?.length && pages?.length > 0 ? pages[currentPageGroup][currentPage] === totalPages : false) return;
              if (currentPage === 4) {
                setCurrentPageGroup((prev) => prev + 1);
                setCurrentPage(0);
              } else {
                setCurrentPage((prev) => prev + 1);
              }
            }}>
            <RiArrowRightSLine color="gray" size={24} />
          </Link>
          <Link
            href={isLastPage ? {} : `/blog?searchTag=${tag}&page=${totalPages}`}
            type="button"
            aria-label="rightDouble"
            className={`transition-opacity ${isLastPage ? "opacity-30 cursor-not-allowed" : "hover:opacity-70"}`}
            onClick={(e) => {
              if (isLastPage) {
                e.preventDefault();
                return;
              }
              if (pages?.length ? currentPageGroup === pages.length - 1 : false) return;
              else {
                setCurrentPageGroup(pages?.length ? pages.length - 1 : 0);
                setCurrentPage(pages?.length ? pages[pages.length - 1].length - 1 : 0);
              }
            }}>
            <RiArrowRightDoubleLine color="gray" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
