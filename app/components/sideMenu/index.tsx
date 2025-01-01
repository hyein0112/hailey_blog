import { useEffect, useRef } from "react";
import * as S from "./style";

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
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
        </ul>
      </S.SideMenuContent>
    </S.SideMenuWrapper>
  );
}
