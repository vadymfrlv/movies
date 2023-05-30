import { StyledBackButton } from './BackButton.styled';

export const BackButton = ({ to, children }) => {
  return <StyledBackButton to={to}>{children}</StyledBackButton>;
};
