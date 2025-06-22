"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { IoClose } from "react-icons/io5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// PDF.js 워커 설정
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export default function PDFModal({ isOpen, onClose, url, title }: PDFModalProps) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const options = useMemo(
    () => ({
      cMapUrl: "/cmaps/",
      cMapPacked: true,
    }),
    [],
  );

  // 모달이 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error(error);
    setError("PDF를 불러오는데 실패했습니다.");
  }

  function handlePageLoadStart() {
    setIsPageLoading(true);
  }
  function handlePageLoadSuccess() {
    setIsPageLoading(false);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-[95%] max-h-[95vh] flex flex-col p-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}>
        {/* 헤더 */}
        <div className="flex justify-between items-center pr-2 pl-6 py-5 border-b bg-white sticky top-0 z-20">
          <h2 className="text-2xl font-bold text-gray-900 truncate pr-4">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl font-bold transition-colors px-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400">
            <IoClose />
          </button>
        </div>
        {/* PDF 영역 */}
        <div ref={containerRef} className="flex-1 flex items-center justify-center min-h-[100px]">
          {error ? (
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-red-500 text-lg font-semibold">{error}</p>
            </div>
          ) : containerWidth > 0 ? (
            <div className="relative w-full flex items-center justify-center">
              <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                options={options}
                loading={
                  <div className="flex items-center justify-center w-full h-full">
                    <span className="animate-pulse text-gray-400 text-lg">로딩 중...</span>
                  </div>
                }>
                <Page
                  pageNumber={pageNumber}
                  width={containerWidth - 32}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  onRenderSuccess={handlePageLoadSuccess}
                  onRenderError={handlePageLoadSuccess}
                  onProgress={handlePageLoadStart}
                />
              </Document>
              {/* 로딩 오버레이 */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-white/70 transition-opacity duration-300 pointer-events-none ${
                  isPageLoading ? "opacity-100" : "opacity-0"
                }`}>
                <span className="animate-pulse text-gray-400 text-lg">페이지 로딩 중...</span>
              </div>
            </div>
          ) : null}
        </div>
        {/* 네비게이션 */}
        <div className=" flex justify-center items-center gap-6 py-6 bg-gradient-to-t from-white/90 via-white/60 to-transparent z-30">
          <button
            onClick={() => {
              setPageNumber((prev) => Math.max(1, prev - 1));
              handlePageLoadStart();
            }}
            disabled={pageNumber <= 1}
            className="rounded-full bg-green-600 text-white px-6 py-2 text-sm font-bold shadow hover:bg-green-700 transition disabled:opacity-40 disabled:cursor-not-allowed">
            이전
          </button>
          <span className="text-gray-700 font-semibold text-sm select-none">
            Page {pageNumber} / {numPages}
          </span>
          <button
            onClick={() => {
              setPageNumber((prev) => Math.min(numPages, prev + 1));
              handlePageLoadStart();
            }}
            disabled={pageNumber >= numPages}
            className="rounded-full bg-green-600 text-white px-6 py-2 text-sm font-bold shadow hover:bg-green-700 transition disabled:opacity-40 disabled:cursor-not-allowed">
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
