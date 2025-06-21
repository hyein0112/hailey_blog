"use client";

import * as S from "./style";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "white";
  text?: string;
}

export default function LoadingSpinner({ size = "medium", color = "primary", text }: LoadingSpinnerProps) {
  return (
    <S.SpinnerContainer>
      <S.Spinner $size={size} $color={color} />
      {text && <S.SpinnerText>{text}</S.SpinnerText>}
    </S.SpinnerContainer>
  );
}
