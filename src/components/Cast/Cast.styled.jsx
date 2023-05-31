import styled from 'styled-components';

import { Box } from 'components/Box/Box';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(11, 120px);
  gap: 30px;

  margin: 0;
  padding-bottom: 30px;
  justify-content: space-between;
`;

export const DescriptionContainer = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  font-size: ${p => p.theme.fontSizes[0]}px;

  color: ${p => p.theme.colors.main};
  background-color: ${p => p.theme.colors.hoverBackground};
  border-radius: ${p => p.theme.radii.poster};

  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export const CastItem = styled.li`
  position: relative;
  width: 100%;
  height: auto;

  border-radius: ${p => p.theme.radii.poster};

  &:hover ${DescriptionContainer} {
    opacity: 1;
  }
`;

export const Photo = styled.img`
  width: 120px;
  height: 170px;

  border-radius: ${p => p.theme.radii.poster};
`;

export const Description = styled.p`
  padding: 7px;

  text-align: center;
`;
