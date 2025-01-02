import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const BottomButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 32px;
  padding: 20px 16px;
`;

export const BottomButton = styled("button")<{ isSubmit: boolean }>`
  font-weight: 400;
  padding: 16px 32px;
  border-radius: 10px;
  background: ${({ theme, isSubmit }) => (isSubmit ? theme.colors.green600 : theme.colors.red400)};
  color: ${({ theme }) => theme.colors.background1};
`;
