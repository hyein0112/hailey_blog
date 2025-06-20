"use client";

import React, { useState } from "react";
import Link from "next/link";
import SideMenu from "./sideMenu";
import Logo from "@/assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <SideMenu isOpen={showSideMenu} onClose={() => setShowSideMenu(false)} />
      <header
        className={`top-0 left-0 right-0 z-10 h-[70px] border-solid border-0 border-b border-b-border2 flex items-center justify-center transition-[height] duration-300 background-blur ${
          pathname.includes("/post") ? "static w-full" : "sticky"
        }`}>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full h-[70px] max-w-[1200px] px-6 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/home">
                <Logo />
              </Link>
            </div>
            <nav className="">
              <ul className="flex h-full items-center gap-2 md:gap-1">
                <li>
                  <Link href="/blog" prefetch={true}>
                    <button className="hidden md:flex justify-center items-center p-1 text-base text-black">Blog</button>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <button className="hidden md:flex justify-center items-center p-1 text-base text-black">About</button>
                  </Link>
                </li>
                <button className="md:hidden flex justify-center items-center p-1" onClick={() => setShowSideMenu(true)}>
                  <RxHamburgerMenu size={24} className="text-border4" />
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
