import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  align-items: center;
  margin: 30px auto 0;
  width: 100%;
  max-width: 600px;
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledField = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 40px;
  padding-left: 8px;
  padding-right: 40px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  outline: none;
  color: #1900ff;
  background-color: #e7fc00;
`;

export const Button = styled.button`
  position: absolute;
  right: -5px;
  display: block;
  width: 45px;
  height: 45px;
  border: none;
  background-image: url('https://raw.githubusercontent.com/vadymfrlv/storage/fe9b6f252d7580e4be1db0339fc7a1314448d251/homeworks/searchY.svg');
  background-color: transparent;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
