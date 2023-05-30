import styled from 'styled-components';

export const ReviewsList = styled.ul`
  color: #fff;
`;

export const ReviewsItem = styled.li`
  margin-bottom: 30px;

  &:not(:last-child) {
    border-bottom: 2px dashed #fff;
  }
`;

export const Author = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Content = styled.p`
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.3;
`;
