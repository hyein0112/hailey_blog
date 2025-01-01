import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

export const Container = styled.header`
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${({ theme }) => theme.colors.background2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border2};
  opacity: 0.95;

  display: flex;
  align-items: center;
  justify-content: center;

  &.detail {
    position: static;
    width: 100%;
  }
`;

export const HeaderInnerBox = styled.div`
  width: 100%;
  height: 70px;
  max-width: 1200px;
  padding: 4px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.green600};
`;

export const RightBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 8px;
`;

export const InputBox = styled("form")<{ showSearchBar?: boolean }>`
  display: flex;
  width: fit-content;
  height: 55%;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  border: none;
  transition: all 0.5s;

  ${({ theme, showSearchBar }) => showSearchBar && `border: 1px solid ${theme.colors.border3}; padding: 4px`};
`;

export const SearchButton = styled.button`
  padding-top: 2px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled("input")<{ showSearchBar?: boolean }>`
  border: none;
  background: none;
  outline: none;
  width: 0;
  transition: all 0.5s;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.black};
  ${({ showSearchBar }) => showSearchBar && "width: 180px"};

  @media screen and (max-width: 512px) {
    width: 100px;
  }
`;

export const ContactButton = styled(Button)`
  @media screen and (max-width: 512px) {
    display: none;
  }
`;
