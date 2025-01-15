import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

export const TagAndDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 20px 0;

  & > span:first-of-type {
    color: ${({ theme }) => theme.colors.green600};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  p {
    display: block;
    margin: 4px 0;
    line-height: normal;

    &:has(img) {
      text-align: center;
    }
  }

  pre {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background3};
    padding: 16px;
    margin: 4px 0;
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: ${({ theme }) => theme.fontSize.lg};
    overflow-x: auto;
  }

  h1,
  h2 {
    margin: 20px 0 4px 0;
  }

  h3 {
    margin: 12px 0 4px 0;
  }

  img {
    max-width: 600px;
    align-self: center;
    width: 100%;
    object-fit: cover;
  }
`;
