import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { PostData } from "@/types/post";

import * as S from "./style";
import { Divider } from "../common";
import dayjs from "@/lib/dayjs";

hljs.configure({
  languages: ["javascript", "python", "html", "css"],
});

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
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const parseMarkdown = async () => {
      if (content?.content) {
        const parsed = await marked(content.content);
        setHtmlContent(parsed);
      } else {
        setHtmlContent("");
      }
    };

    parseMarkdown();
  }, [content?.content]);

  if (!htmlContent) {
    return <div>콘텐츠가 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.TagAndDate>
        <span>{content.tag}</span>
        <span>{dayjs.tz(content.createdAt).format("YYYY-MM-DD A hh:mm")}</span>
      </S.TagAndDate>
      <h1>{content.title}</h1>
      <Divider height="2px" margin="8px 0" />
      <S.ContentBox dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </S.Container>
  );
}
