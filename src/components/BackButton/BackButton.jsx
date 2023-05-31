import PropTypes from 'prop-types';

import { StyledBackButton } from './BackButton.styled';

export const BackButton = ({ to, children }) => {
  return <StyledBackButton to={to}>{children}</StyledBackButton>;
};

BackButton.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.string.isRequired,
};
