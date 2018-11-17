import styled from 'styled-components';
import { ErrorMessage } from 'formik';

import rem from './utils/rem';
import { Container } from './layout';
import { Button } from './components';

export const FormWrapper = styled(Container)`
  padding: 20px;
  background: ${p => p.theme.colors.gray};
  margin-right: auto;
  margin-left: auto;
  max-width: ${rem(400)};
`;

export const FormField = styled(Container)`
  margin-bottom: 20px;
  width: 100%;
`;

export const FormButton = styled(Button)`
  font-size: ${rem(18)};
  min-width: ${rem(80)};

  font-weight: bold;
  border-radius: 4px;
  padding: ${rem(12)};
  transition: background 0.3s ease;
  :hover {
    background: #ffba00;
  }
`;

export const FormError = styled(ErrorMessage)`
  color: tomato;
  align-self: flex-start;
`;
