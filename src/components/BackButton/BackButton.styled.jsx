import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledBackButton = styled(Link)`
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 5px 10px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[1]}px;
  text-transform: uppercase;

  color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.btn};
  border-radius: ${p => p.theme.radii.btn};

  &:hover,
  &:focus {
    box-shadow: ${p => p.theme.shadows.btn};
  }
`;
