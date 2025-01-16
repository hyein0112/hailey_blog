import styled from "@emotion/styled";

export const SideMenuWrapper = styled("div")<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  justify-content: flex-end;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

export const SideMenuContent = styled.div`
  width: 80%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 24px;
  background: ${({ theme }) => theme.colors.background2};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow-y: auto;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  &.modal-open {
    transform: translateX(0);
  }

  @media screen and (max-width: 500px) {
    display: flex;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-start;
`;

export const MenuBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const Menu = styled.li`
  padding: 16px 24px;
  color: ${({ theme }) => theme.colors.text3};
  font-weight: 400;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;
