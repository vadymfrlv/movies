import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #1900ff;
  border-bottom: 6px solid #e7fc00;

  z-index: 1;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: #e7fc00;

  &:not(:last-child) {
    margin-right: 100px;
  }

  &:hover:not(.active),
  &.focus:not(.active) {
    text-shadow: 0 0 3px #91ff00, 0 0 8px #91ff00, 0 0 13px #91ff00, 0 0 17px #91ff00,
      0 0 22px #91ff00, 0 0 27px #91ff00, 0 0 32px #91ff00;
  }

  &.active {
    text-shadow: 0 0 3px #91ff00, 0 0 8px #91ff00, 0 0 13px #91ff00, 0 0 17px #91ff00,
      0 0 22px #91ff00, 0 0 27px #91ff00, 0 0 32px #91ff00;
  }
`;
