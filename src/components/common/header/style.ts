import styled from "@emotion/styled";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray_400};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderInnerBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  background-color: ${(props) => props.theme.colors.gray_200};
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputBox = styled("form")<{ showSearchBar?: boolean }>`
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  border: ${(props) => (props.showSearchBar ? `1px solid ${props.theme.colors.gray_700}` : "none")};
`;

export const SearchButton = styled.button`
  width: 20px;
  height: 20px;
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
  font-size: ${(props) => props.theme.fontSize.sm};
  display: ${(props) => (props.showSearchBar ? "block" : "none")};
`;
