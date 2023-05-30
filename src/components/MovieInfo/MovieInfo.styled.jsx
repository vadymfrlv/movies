import styled from 'styled-components';

import { Box } from 'components/Box/Box';

export const InfoContainer = styled(Box)`
  display: flex;
  margin-bottom: 30px;
  color: #fff;
`;

export const Poster = styled.img`
  margin-right: 30px;
  border-radius: 4px;
  width: 300px;
  height: 100%;
`;

export const Info = styled(Box)`
  position: relative;
  top: -5px;
`;

export const Title = styled.h2`
  position: absolute;
  font-weight: 900;
  font-size: 25px;
  text-transform: uppercase;
`;

export const Year = styled.span`
  margin-left: 10px;
`;

export const DescriptionContainer = styled(Box)`
  margin-top: 32px;
  max-width: 900px;
`;

export const Score = styled.p`
  margin-bottom: 23px;
  font-weight: 900;
  font-size: 15px;
  text-transform: uppercase;
`;

export const Overview = styled.h3`
  margin-bottom: 5px;
  font-weight: 900;
  font-size: 15px;
  text-transform: uppercase;
`;

export const DescriptionTitle = styled.h3`
  margin-bottom: 5px;
  font-weight: 900;
  font-size: 15px;
  text-transform: uppercase;
`;

export const DescriptionText = styled.p`
  margin-bottom: 23px;
  font-weight: 500;
`;
