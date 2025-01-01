import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background2};
  overflow-y: scroll;
`;
