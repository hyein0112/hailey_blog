import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const Container = styled.header`
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border2};
  background: rgba(242, 242, 242, 0.75);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);

  display: flex;
  align-items: center;
  justify-content: center;

  &.detail {
    position: static;
    width: 100%;
  }
  transition: height 0.3s;
`;

export const HeaderWrapbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

export const HeaderInnerBox = styled.div`
  width: 100%;
  height: 70px;
  max-width: 1200px;
  padding: 24px;
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

export const PCButton = styled(Button)`
  display: block;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const MOButton = styled(Button)`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
