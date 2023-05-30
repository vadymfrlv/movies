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
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  border-radius: 4px;
  color: #e7fc00;
  border: 3px solid #e7fc00;

  &:hover:not(.active),
  &.focus:not(.active) {
    box-shadow: 0 0 5px #91ff00, 0 0 5px #91ff00, 0 0 9px #91ff00, 0 0 13px #91ff00,
      0 0 18px #91ff00, 0 0 23px #91ff00, 0 0 28px #91ff00;
  }

  &.active {
    box-shadow: 0 0 5px #91ff00, 0 0 5px #91ff00, 0 0 9px #91ff00, 0 0 13px #91ff00,
      0 0 18px #91ff00, 0 0 23px #91ff00, 0 0 28px #91ff00;
  }
`;
