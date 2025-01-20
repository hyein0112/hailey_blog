"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SideMenu } from "@/components";
import Logo from "@/assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ isDetail }: { isDetail: boolean }) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <>
      <SideMenu isOpen={showSideMenu} onClose={() => setShowSideMenu(false)} />
      <header
        className={`top-0 left-0 right-0 z-10 h-[70px] border-solid border-0 border-b border-b-border2 backdrop-blur-lg bg-background2/90 flex items-center justify-center transition-[height] duration-300 ${
          isDetail ? "static w-full" : "sticky"
        }`}>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full h-[70px] max-w-[1200px] px-6 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="flex h-full items-center gap-2 sm:gap-1">
              <Link href="/blog">
                <button className="hidden sm:flex justify-center items-center p-1 text-base">Blog</button>
              </Link>
              <Link href="/about">
                <button className="hidden sm:flex justify-center items-center p-1 text-base">About</button>
              </Link>
              <button className="sm:hidden flex justify-center items-center p-1" onClick={() => setShowSideMenu(true)}>
                <RxHamburgerMenu size={24} className="text-border4" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
