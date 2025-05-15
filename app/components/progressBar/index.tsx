"use client";

import { useState, useEffect } from "react";
import * as S from "./style";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / scrollHeight) * 100;

      setScrollPercentage(percentage);
      setIsVisible(scrollTop > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <S.Container>
      <S.Bar width={`${scrollPercentage}%`} />
    </S.Container>
  );
};

export default ProgressBar;
