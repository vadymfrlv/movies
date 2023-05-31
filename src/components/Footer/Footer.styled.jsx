import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.colors.main};
  border-top: ${p => p.theme.borders.headerFooter};
`;

export const FooterText = styled.p`
  display: flex;

  font-weight: ${p => p.theme.fontWeights.black};
  font-size: ${p => p.theme.fontSizes[5]}px;
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.wide};
  text-decoration: none;

  color: ${p => p.theme.colors.accent};
`;
