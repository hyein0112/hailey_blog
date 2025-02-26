import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { PostData } from "@/types/post";

import * as S from "./style";
import { Divider } from "../common";
import dayjs from "@/lib/dayjs";
import tagConverter from "@/lib/tagConverter";

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
  if (!content?.content) {
    return <div>콘텐츠가 없습니다.</div>;
  }

  // 서버에서 마크다운을 HTML로 파싱
  const htmlContent = marked(content.content);

  return (
    <div className="w-full py-4 flex flex-col mb-20">
      {/* Container */}
      <h1>{content.title}</h1>
      <div className="flex items-center gap-3 py-3 pb-5 text-sm">
        {/* TagAndDate */}
        <span className="text-green-600 font-semibold bg-gray-100 px-2 py-1 rounded-lg">{tagConverter(content.tag)}</span>
        <span className="-mt-[3px] text-gray-700">{dayjs.tz(content.createdAt).format("YYYY년 MM월 DD일")}</span>
      </div>
      <Divider height="1px" margin="8px 0 24px 0" />
      <div className="post-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
