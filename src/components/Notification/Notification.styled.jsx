import styled from 'styled-components';
export const NotificationText = styled.p`
  width: 400px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[3]}px;
  letter-spacing: ${p => p.theme.letterSpacings.small};
  text-align: center;
  text-transform: uppercase;

  color: ${p => p.theme.colors.accent};
`;
