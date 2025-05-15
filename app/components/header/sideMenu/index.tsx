"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Divider } from "@/components";
import { CgClose } from "react-icons/cg";

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
    <div
      className={`flex fixed inset-0 bg-black/70 z-50 justify-end md:hidden ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-300 ease-in-out`}>
      <div
        ref={sideMenuRef}
        className={`w-4/5 h-full flex flex-col items-center p-4 gap-6 bg-background2 rounded-tl rounded-bl overflow-y-auto shadow-[-2px_0_5px_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <button className="self-start text-text3" onClick={onClose}>
          <CgClose size={24} />
        </button>
        <ul className="flex flex-col w-full h-fit">
          <Link href="/" onClick={onClose}>
            <li className="py-4 px-6 text-text3 font-normal hover:font-semibold cursor-pointer">Home</li>
          </Link>
          <Divider width="100%" color="border1" />
          <Link href="/blog" onClick={onClose}>
            <li className="py-4 px-6 text-text3 font-normal hover:font-semibold cursor-pointer">Blog</li>
          </Link>
          <Divider width="100%" color="border1" />
          <Link href="/about" onClick={onClose}>
            <li className="py-4 px-6 text-text3 font-normal hover:font-semibold cursor-pointer">About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
