"use client";

import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { PostData } from "@/types/post";
import { useEffect, useRef } from "react";

import { Divider } from "@/components";
import dayjs from "@/lib/dayjs";

// Highlight.js 설정
hljs.configure({
  languages: ["javascript", "python", "html", "css"],
});

// Marked.js 설정
marked.use(
  markedHighlight({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    },
  }),
);

export default function PostContent({ content }: { content: PostData }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const tables = contentRef.current.querySelectorAll("table");
      tables.forEach((table) => {
        // 이미 감싸져 있지 않은 경우에만 감쌈
        if (!table.parentElement?.classList.contains("overflow-x-auto")) {
          const wrapper = document.createElement("div");
          wrapper.className = "overflow-x-auto";
          table.parentElement?.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        }
      });
    }
  }, []);

  if (!content?.content) {
    return <div>콘텐츠가 없습니다.</div>;
  }

  // 서버에서 마크다운을 HTML로 파싱
  const htmlContent = marked(content.content);

  return (
    <div className="w-full p-4 flex flex-col mb-20">
      {/* Container */}
      <h1 className="max-w-full text-2xl lg:text-3xl break-words whitespace-pre-line">{content.title}</h1>
      <div className="flex items-center gap-3 py-3 pb-5 text-sm">
        {/* TagAndDate */}
        <span className="text-green-600 font-semibold bg-gray-100 px-2 py-1 rounded-lg">{content.tag}</span>
        <span className="-mt-[3px] text-gray-700">{dayjs.tz(content.createdAt).format("YYYY년 MM월 DD일")}</span>
      </div>
      <Divider height="1px" margin="8px 0 24px 0" />
      <div ref={contentRef} className="post-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
