"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// PDF.js 워커 설정
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

interface PresentationCardProps {
  url: string;
  title: string;
  onOpen: () => void;
}

export default function PresentationCard({ url, title, onOpen }: PresentationCardProps) {
  const [error, setError] = useState<string | null>(null);
  const [thumbWidth, setThumbWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const options = useMemo(
    () => ({
      cMapUrl: "/cmaps/",
      cMapPacked: true,
    }),
    [],
  );

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setThumbWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess() {
    setError(null);
  }

  function onDocumentLoadError() {
    setError("PDF를 불러오는데 실패했습니다.");
  }

  return (
    <button
      onClick={onOpen}
      className="group w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 focus:outline-none"
      style={{ minHeight: 140 }}>
      <div ref={containerRef} className="w-full flex-1 flex items-center justify-center bg-gray-50">
        {error ? (
          <span className="text-red-500 text-sm font-medium">{error}</span>
        ) : thumbWidth > 0 ? (
          // 미리보기
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            options={options}
            loading={
              <div className="flex items-center justify-center w-full h-full">
                <span className="text-gray-400 text-sm">로딩 중...</span>
              </div>
            }>
            <Page
              pageNumber={1}
              width={thumbWidth} // padding 고려
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-gray-400 text-sm">페이지 로딩 중...</span>
                </div>
              }
            />
          </Document>
        ) : null}
      </div>
      {/* 제목 */}
      <div className="w-full px-4 py-3 bg-white">
        <span className="text-base font-semibold text-black group-hover:text-green-600 transition-all duration-300">{title}</span>
      </div>
    </button>
  );
}
