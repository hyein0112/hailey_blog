"use client";

import React, { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import MDEditor, { commands, ICommand, TextAreaTextApi } from "@uiw/react-md-editor";
import matter from "gray-matter";
import { CiImageOn } from "react-icons/ci";

import * as S from "./style";
import usePost from "@/stores/usePost";

export default function Editor() {
  const { postData, setPostData } = usePost();
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (postData) {
      setValue(`---
title: ${postData.title}
tag:  ${postData.tag}
---
${postData.content}`);
    } else {
      setValue(`---
title: 게시글 제목
tag: front | back
---
게시글 본문`);
    }
  }, [postData]);

  useEffect(() => {
    if (value.length > 0) {
      const { data, content } = matter(value);
      setPostData({
        title: data.title,
        tag: data.tag,
        content,
      });
    }
  }, [value]);

  // 이미지 압축
  const compressImage = async (file: File) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedBlob = await imageCompression(file, options);
      return new File([compressedBlob], file.name, { type: compressedBlob.type });
    } catch (error) {
      console.error("이미지 압축 실패:", error);
      return file;
    }
  };

  // 이미지 업로드
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/file/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
    }
  };

  // 이미지 업로드 custom 버튼
  const imageUploadCommand: ICommand = {
    name: "image",
    keyCommand: "image",
    buttonProps: { "aria-label": "이미지 업로드" },
    icon: <CiImageOn />,
    execute: async (_, api: TextAreaTextApi) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = async (e: Event) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          const compressedFile = await compressImage(file);
          const imageUrl = await uploadImage(compressedFile);
          if (imageUrl) {
            const imageMarkdown = `![image](${imageUrl})`;
            api.replaceSelection(imageMarkdown);
          }
        }
      };
      input.click();
    },
  };

  const customCommands = [
    commands.bold,
    commands.italic,
    commands.strikethrough,
    commands.hr,
    commands.link,
    commands.quote,
    commands.code,
    imageUploadCommand,
  ];

  return (
    <S.EditorContainer data-color-mode="light">
      <MDEditor value={value} onChange={(val) => setValue(val || "")} commands={customCommands} />
    </S.EditorContainer>
  );
}
