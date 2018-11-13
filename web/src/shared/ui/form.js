import styled from 'styled-components';
import { ErrorMessage } from 'formik';

import { Container } from './layout';
import { Button } from './components';

export const FormWrapper = styled(Container)`
  padding: 20px;
  width: 400px;
  margin: 0 auto;
`;

export const FormField = styled(Container)`
  margin-bottom: 20px;
  width: 100%;
`;

export const FormButton = styled(Button)`
  width: 100%;
  height: 30px;
  font-size: 15px;
`;

export const FormError = styled(ErrorMessage)`
  color: tomato;
  align-self: flex-start;
`;
