import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.background2};
  overflow-y: scroll;
`;

export const Main = styled.main`
  padding: 70px 0 40px 0;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
`;
