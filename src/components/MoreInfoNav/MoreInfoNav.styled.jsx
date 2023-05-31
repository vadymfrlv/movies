import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  margin-bottom: 30px;
`;

export const NavItem = styled.li`
  &:first-child {
    margin-right: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  min-width: 129px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[1]}px;
  text-transform: uppercase;

  color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.btn};
  border-radius: ${p => p.theme.radii.btn};

  &:hover:not(.active),
  &.focus:not(.active) {
    box-shadow: ${p => p.theme.shadows.btn};
  }

  &.active {
    box-shadow: ${p => p.theme.shadows.btn};
  }
`;
