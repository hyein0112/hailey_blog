import styled from "@emotion/styled";

export const PostBox = styled.div`
  height: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.background3};
  padding: 20px;
  border-radius: 16px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const TextBox = styled.div`
  height: 100%;
  padding: 8px 40px 8px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleAndContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
`;

export const PostContent = styled.span`
  font-size: 1rem;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
  height: 100%;
  & > img {
    border-radius: 8px;
    object-fit: cover;
    height: 100%;
  }
`;
