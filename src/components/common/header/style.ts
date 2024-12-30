import styled from "@emotion/styled";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_300};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderInnerBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  border: ${({ theme, showSearchBar }) => (showSearchBar ? `1px solid ${theme.colors.gray_500}` : "none")};
  transition: all 1s;
`;

export const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled("input")<{ showSearchBar?: boolean }>`
  border: none;
  background: none;
  outline: none;
  width: 180px;
  transition: all 1s;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.black};
  display: ${({ showSearchBar }) => (showSearchBar ? "block" : "none")};

  @media screen and (max-width: 512px) {
    width: 100px;
  }
`;

export const ContactButton = styled.button`
  display: block;

  @media screen and (max-width: 512px) {
    display: none;
  }
`;
