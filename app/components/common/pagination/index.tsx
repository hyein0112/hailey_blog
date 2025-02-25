"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { RiArrowLeftDoubleLine, RiArrowLeftSLine, RiArrowRightDoubleLine, RiArrowRightSLine } from "react-icons/ri";

type PaginationProps = {
  pageIndex: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
  totalPages: number;
};

const PaginationV2 = ({ totalPages, pageIndex, setPageIndex }: PaginationProps) => {
  const [currentPageGroup, setCurrentPageGroup] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [pages, setPages] = useState<number[][]>();

  // 페이지네이션 버튼 2차원 배열로 5개씩 분류
  useEffect(() => {
    const groups = Array.from({ length: Math.ceil(totalPages / 5) }, (_, i) =>
      Array.from({ length: 5 }, (_, j) => i * 5 + j + 1).filter((num) => num <= totalPages),
    );
    setPages(groups);
  }, [totalPages]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    pages && setPageIndex(pages[currentPageGroup][currentPage] - 1);
  }, [currentPageGroup, currentPage]);

  useEffect(() => {
    setCurrentPage(pageIndex % 5 || 0);
    setCurrentPageGroup(Math.floor(pageIndex / 5) || 0);
  }, [pageIndex]);

  return (
    <div className="mt-4 flex justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center dark:text-white">
          <button
            aria-label="leftDouble"
            type="button"
            onClick={() => {
              setCurrentPageGroup(0);
              setCurrentPage(0);
            }}
            disabled={currentPageGroup === 0}>
            <RiArrowLeftDoubleLine size={24} />
          </button>
          <button
            aria-label="left"
            type="button"
            onClick={() => {
              if (currentPage === 0) {
                setCurrentPageGroup((prev) => prev - 1);
                setCurrentPage(4);
              } else {
                setCurrentPage((prev) => prev - 1);
              }
            }}
            disabled={currentPageGroup === 0 && currentPage === 0}>
            <RiArrowLeftSLine size={24} />
          </button>
        </div>

        <div className="flex items-center justify-center dark:text-white">
          {pages &&
            pages[currentPageGroup]?.map((page, index) => {
              return (
                <button
                  key={`${page}_${index}`}
                  id="1"
                  type="button"
                  className={`flex h-10 w-10 items-center justify-center p-4 ${
                    currentPage === index && "bg-green-500 rounded-full text-white"
                  }`}
                  onClick={() => setCurrentPage(index)}>
                  {page}
                </button>
              );
            })}
        </div>

        <div className="flex items-center justify-center dark:text-white">
          <button
            type="button"
            aria-label="right"
            onClick={() => {
              if (currentPage === 4) {
                setCurrentPageGroup((prev) => prev + 1);
                setCurrentPage(0);
              } else {
                setCurrentPage((prev) => prev + 1);
              }
            }}
            disabled={pages?.length && pages?.length > 0 ? pages[currentPageGroup][currentPage] === totalPages : false}>
            <RiArrowRightSLine size={24} />
          </button>
          <button
            type="button"
            aria-label="rightDouble"
            onClick={() => {
              setCurrentPageGroup(pages?.length ? pages.length - 1 : 0);
              setCurrentPage(pages?.length ? pages[pages.length - 1].length - 1 : 0);
            }}
            disabled={pages?.length ? currentPageGroup === pages.length - 1 : false}>
            <RiArrowRightDoubleLine size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationV2;
