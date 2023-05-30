import { useLocation } from 'react-router-dom';
import { NavList, NavItem, StyledNavLink } from './MoreInfoNav.styled';

export const MoreInfoNav = () => {
  const location = useLocation();
  return (
    <NavList>
      <NavItem>
        <StyledNavLink to={'cast'} state={location.state}>
          Cast
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to={'reviews'} state={location.state}>
          Reviews
        </StyledNavLink>
      </NavItem>
    </NavList>
  );
};
