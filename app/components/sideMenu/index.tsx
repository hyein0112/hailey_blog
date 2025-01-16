"use client";

import { useEffect, useRef } from "react";
import * as S from "./style";
import Link from "next/link";
import { Divider } from "../common";
import { CgClose } from "react-icons/cg";
import theme from "@/styles/theme";

export default function SideMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const sideMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) onClose();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return (
    <S.SideMenuWrapper isOpen={isOpen} className={isOpen ? "modal-open" : ""}>
      <S.SideMenuContent ref={sideMenuRef} className={isOpen ? "modal-open" : ""}>
        <S.CloseButton onClick={onClose}>
          <CgClose size={24} />
        </S.CloseButton>
        <S.MenuBox>
          <Link href={"/"}>
            <S.Menu>Home</S.Menu>
          </Link>
          <Divider width="100%" color={theme.colors.border1} />
          <Link href={"/blog"}>
            <S.Menu>Blog</S.Menu>
          </Link>
          <Divider width="100%" color={theme.colors.border1} />
          <Link href={"/about"}>
            <S.Menu>About</S.Menu>
          </Link>
        </S.MenuBox>
      </S.SideMenuContent>
    </S.SideMenuWrapper>
  );
}
