import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

export const Container = styled("header")<{ showSearchBar: boolean }>`
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

  transition: height 0.3s;

  ${({ showSearchBar }) => showSearchBar && "height: 140px;"}

  &.detail {
    position: static;
    width: 100%;
  }
`;

export const HeaderInnerBox = styled.div`
  position: absolute;
  top: 0;
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

  @media screen and (max-width: 512px) {
    gap: 4px;
  }
`;

export const InputBox = styled("form")<{ showSearchBar?: boolean }>`
  position: absolute;
  top: 70px;
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 0;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  ${({ showSearchBar }) => showSearchBar && "height: 50px;"};
`;

export const SearchButton = styled.button`
  padding-top: 2px -1px 0 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 8px;
  gap: 8px;
  height: 100%;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.border3}`};
`;

export const Input = styled("input")<{ showSearchBar?: boolean }>`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  transition: all 0.5s;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.black};
  /* ${({ showSearchBar }) => showSearchBar && "width: 140px"}; */
`;

export const ContactButton = styled(Button)`
  @media screen and (max-width: 512px) {
    display: none;
  }
`;
