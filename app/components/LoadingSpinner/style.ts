import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Spinner = styled.div<{ $size: string; $color: string }>`
  width: ${({ $size }: { $size: string }) => {
    switch ($size) {
      case "small":
        return "20px";
      case "large":
        return "60px";
      default:
        return "40px";
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "20px";
      case "large":
        return "60px";
      default:
        return "40px";
    }
  }};
  border: 3px solid transparent;
  border-top: 3px solid
    ${({ $color }) => {
      switch ($color) {
        case "secondary":
          return "#6b7280";
        case "white":
          return "#ffffff";
        default:
          return "#10b981";
      }
    }};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const SpinnerText = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
`;
