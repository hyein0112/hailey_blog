"use client";

import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { PostData } from "@/types/post";

import * as S from "./style";
import { Divider } from "../common";
import dayjs from "@/lib/dayjs";
import tagConverter from "@/lib/tagConverter";

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
      <h1>{content.title}</h1>
      <S.TagAndDate>
        <span>{tagConverter(content.tag)}</span>
        <span>{dayjs.tz(content.createdAt).format("YYYY년 MM월 DD일")}</span>
      </S.TagAndDate>
      <Divider height="1px" margin="8px 0 24px 0" />
      <S.ContentBox dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </S.Container>
  );
}
