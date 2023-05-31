import styled from 'styled-components';

import { Box } from 'components/Box/Box';

export const InfoContainer = styled(Box)`
  display: flex;
  margin-bottom: 30px;

  color: ${p => p.theme.colors.white};
`;

export const Poster = styled.img`
  width: 300px;
  height: 100%;

  margin-right: 30px;

  border-radius: ${p => p.theme.radii.poster};
`;

export const Info = styled(Box)`
  position: relative;
  top: -5px;
`;

export const Title = styled.h2`
  position: absolute;

  font-weight: ${p => p.theme.fontWeights.black};
  font-size: ${p => p.theme.fontSizes[5]}px;
  text-transform: uppercase;
`;

export const Year = styled.span`
  margin-left: 10px;
`;

export const DescriptionContainer = styled(Box)`
  max-width: 900px;
  margin-top: 32px;
`;

export const Score = styled.p`
  margin-bottom: 23px;

  font-weight: ${p => p.theme.fontWeights.black};
  font-size: ${p => p.theme.fontSizes[1]}px;
  text-transform: uppercase;
`;

export const Overview = styled.h3`
  margin-bottom: 5px;

  font-weight: ${p => p.theme.fontWeights.black};
  font-size: ${p => p.theme.fontSizes[1]}px;
  text-transform: uppercase;
`;

export const DescriptionTitle = styled.h3`
  margin-bottom: 5px;

  font-weight: ${p => p.theme.fontWeights.black};
  font-size: ${p => p.theme.fontSizes[1]}px;
  text-transform: uppercase;
`;

export const DescriptionText = styled.p`
  margin-bottom: 23px;

  font-weight: ${p => p.theme.fontWeights.semiMedium};
`;
