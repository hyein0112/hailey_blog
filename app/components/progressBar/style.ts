import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0%;
  width: 100%;
  height: 5px;
  z-index: 1000;
`;

export const Bar = styled("div")<{ width: string }>`
  width: ${({ width }) => width};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.green600};
`;
