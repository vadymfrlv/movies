import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.colors.main};
  border-bottom: ${p => p.theme.borders.headerFooter};

  z-index: ${p => p.theme.zIndices[1]};
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.black};
  font-size: ${p => p.theme.fontSizes[6]}px;
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  text-transform: uppercase;
  text-decoration: none;

  color: ${p => p.theme.colors.accent};

  &:not(:last-child) {
    margin-right: 100px;
  }

  &:hover:not(.active),
  &.focus:not(.active) {
    text-shadow: ${p => p.theme.shadows.navLink};
  }

  &.active {
    text-shadow: ${p => p.theme.shadows.navLink};
  }
`;
