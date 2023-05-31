import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  position: relative;
  max-width: 600px;

  display: flex;
  align-items: center;
  margin: 30px auto 0;

  border-radius: ${p => p.theme.radii.btn};
  overflow: hidden;
`;

export const StyledField = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 40px;
  padding-left: 8px;
  padding-right: 40px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;

  color: ${p => p.theme.colors.main};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.btn};
  outline: none;
  background-color: ${p => p.theme.colors.accent};
`;

export const Button = styled.button`
  position: absolute;
  right: -5px;
  width: 45px;
  height: 45px;

  display: block;

  border: ${p => p.theme.borders.none};
  background-image: url('https://raw.githubusercontent.com/vadymfrlv/storage/fe9b6f252d7580e4be1db0339fc7a1314448d251/homeworks/searchY.svg');
  background-color: transparent;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;
`;
