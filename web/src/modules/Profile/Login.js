import React from 'react';
import {
  Formik, Form, Field, validateYupSchema, yupToFormErrors,
} from 'formik';
import * as Yup from 'yup';

import {
  Input, Label, P, Link,
} from '../../shared/ui/components';
import {
  FormButton, FormError, FormWrapper, FormField,
} from '../../shared/ui/form';
import Spinner from '../../shared/ui/spinner';

import { authService } from '../../api';
import { useUserContext } from '../../context/UserContextProvider';
import { Container } from '../../shared/ui/layout';
import rem from '../../shared/ui/utils/rem';

export default ({ history }) => {
  const { setUser } = useUserContext();
  return (
    <Container
      dir="column"
      align="center"
      justify="center"
      style={{ padding: `${rem(15)} ${rem(15)} 0 ${rem(15)} ` }}
    >
      <h2 style={{ textTransform: 'uppercase' }}>Sign in.</h2>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          const loginSchema = Yup.object().shape({
            email: Yup.string()
              .email()
              .required(),
            password: Yup.string()
              .required()
              .min(6),
          });
          try {
            validateYupSchema(values, loginSchema, true);
          } catch (error) {
            return yupToFormErrors(error);
          }
          return {};
        }}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          try {
            const data = await authService.login(values.email, values.password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user-data', JSON.stringify(data.user));
            setUser(data.user);
            setSubmitting(false);
            history.push('/');
          } catch (error) {
            if (error && error.response && error.response.data && error.response.data.message) {
              const { message } = error.response.data;

              if (message.toLowerCase().includes('user')) {
                setFieldError('email', message);
              }

              if (message.toLowerCase().includes('password')) {
                setFieldError('password', message);
              }
            }
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors }) => (
          <FormWrapper dir="column" align="center" as={Form} style={{ width: '100%' }}>
            <FormField dir="column">
              <Label>Email</Label>
              <Input
                error={errors.email ? 1 : 0}
                as={Field}
                type="email"
                name="email"
                placeholder="valid@email.com"
              />
              <FormError name="email" component="div" />
            </FormField>

            <FormField dir="column">
              <Label>Password</Label>
              <Input
                error={errors.password ? 1 : 0}
                as={Field}
                type="password"
                name="password"
                placeholder="Password..."
              />
              <FormError name="password" component="div" />
            </FormField>

            <FormField>
              <FormButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : 'login'}
              </FormButton>
            </FormField>
            <P>
              Need to create an account?
              <span>
                <Link color="#000" style={{ textDecoration: 'underline' }} to="/signup">
                  Sign up
                </Link>
              </span>
            </P>
            <P>
              Forgot your password?
              <span>
                <Link color="#000" style={{ textDecoration: 'underline' }} to="/">
                  Recover it
                </Link>
              </span>
            </P>
          </FormWrapper>
        )}
      </Formik>
    </Container>
  );
};
