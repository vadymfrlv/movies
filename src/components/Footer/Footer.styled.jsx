import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #1900ff;
  border-top: 6px solid #e7fc00;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FooterText = styled.p`
  display: flex;
  font-weight: 900;
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-decoration: none;
  color: #e7fc00;
  /* text-shadow: 0 0 1px #91ff00, 0 0 6px #91ff00, 0 0 11px #91ff00, 0 0 15px #91ff00,
    0 0 20px #91ff00, 0 0 25px #91ff00, 0 0 30px #91ff00; */
`;
