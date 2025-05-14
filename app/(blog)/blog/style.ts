import styled from "@emotion/styled";

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
  width: 100%;
  display: flex;
  gap: 12px;
  padding: 8px 0;
`;

export const TapButton = styled("button")<{ isTap?: boolean }>`
  min-width: 100px;
  padding: 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.background3};
  color: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  ${({ isTap, theme }) => isTap && `background: ${theme.colors.green600} ; color: ${theme.colors.background1};`}
  transition: all 0.3s;

  &:hover {
    ${({ isTap, theme }) => isTap || `background: ${theme.colors.green600}; color: ${theme.colors.background1}`};
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
