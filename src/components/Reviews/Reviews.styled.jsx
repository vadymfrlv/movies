import styled from 'styled-components';

export const ReviewsList = styled.ul`
  color: ${p => p.theme.colors.white};
`;

export const ReviewsItem = styled.li`
  margin-bottom: 30px;

  &:not(:last-child) {
    border-bottom: ${p => p.theme.borders.decorative};
  }
`;

export const Author = styled.p`
  margin-bottom: 10px;

  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const Content = styled.p`
  margin-bottom: 30px;

  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: ${p => p.theme.lineHeights.body};
`;
