import styled from "@emotion/styled";

export const SideMenuWrapper = styled("div")<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: flex-end;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.1s ease-in-out, visibility 0.3s ease-in-out;
`;

export const SideMenuContent = styled.div`
  width: 340px;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray_50};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow-y: auto;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  &.modal-open {
    transform: translateX(0);
  }

  @media screen and (max-width: 512px) {
    width: 100%;
  }
`;
