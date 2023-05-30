import styled from 'styled-components';

import { Box } from 'components/Box/Box';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(11, 120px);
  gap: 30px;
  padding-bottom: 30px;
  margin: 0;
  justify-content: space-between;
`;

export const DescriptionContainer = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;

  font-size: 14px;
  color: #1900ff;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e7fc008d;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  border-radius: 5px;
`;

export const CastItem = styled.li`
  border-radius: 5px;
  position: relative;
  width: 100%;
  height: auto;

  &:hover ${DescriptionContainer} {
    opacity: 1;
  }
`;

export const Photo = styled.img`
  width: 120px;
  height: 170px;
  border-radius: 4px;
`;

export const Description = styled.p`
  text-align: center;
  padding: 7px;
`;
