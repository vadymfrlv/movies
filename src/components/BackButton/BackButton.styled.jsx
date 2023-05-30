import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledBackButton = styled(Link)`
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 5px 10px;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  border-radius: 4px;
  color: #e7fc00;
  border: 3px solid #e7fc00;

  &:hover,
  &:focus {
    box-shadow: 0 0 5px #91ff00, 0 0 5px #91ff00, 0 0 9px #91ff00, 0 0 13px #91ff00,
      0 0 18px #91ff00, 0 0 23px #91ff00, 0 0 28px #91ff00;
  }
`;
