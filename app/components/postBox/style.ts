import styled from "@emotion/styled";

export const PostBox = styled.div`
  max-height: 420px;
  height: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.background3};
  padding: 20px;
  border-radius: 16px;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 8px;
    padding: 8px;
    height: 95vw;
  }

  @media screen and (max-width: 385px) {
    max-height: 370px;
    height: 105vw;
  }
`;

export const TextBox = styled.div`
  width: calc(100% - 230px);
  height: 100%;
  padding: 8px 16px 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 4px;
  }
`;

export const TitleAndContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 500px) {
    gap: 4px;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PostContent = styled.span`
  font-size: 1rem;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 500px) {
    -webkit-line-clamp: 2;
  }
`;

export const TagAndDateBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Tag = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.green600};
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const ImageBox = styled.div`
  width: 230px;
  display: flex;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    aspect-ratio: 8 / 5;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
