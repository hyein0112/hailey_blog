import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const ContentBox = styled.main`
  align-self: center;
  padding: 32px 24px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MenuTapBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const TapButton = styled(Link, {
  shouldForwardProp: (prop) => prop !== "$isTap",
})<{ $isTap?: boolean }>`
  min-width: 100px;
  padding: 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.background3};
  color: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  text-align: center;
  ${({ $isTap, theme }) => $isTap && `background: ${theme.colors.green600}; color: ${theme.colors.background1};`}
  transition: all 0.3s;

  &:hover {
    ${({ $isTap, theme }) => $isTap || `background: ${theme.colors.green600}; color: ${theme.colors.background1};`}
  }
`;

export const TapTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
`;
