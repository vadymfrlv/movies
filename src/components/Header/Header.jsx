import { Box } from 'components/Box/Box';

import { StyledHeader, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Box as="nav">
        <StyledNavLink to="/">Trending</StyledNavLink>
        <StyledNavLink to="movies">Movie</StyledNavLink>
      </Box>
    </StyledHeader>
  );
};
