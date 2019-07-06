import React from 'react';
import {
  Formik, Form, Field, validateYupSchema, yupToFormErrors,
} from 'formik';
import * as Yup from 'yup';

import {
  Input, Link, P, Label,
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
      <h2 style={{ textTransform: 'uppercase', margin: '3em', fontWeight: 'bolder' }}>Sign up</h2>

      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
        }}
        validate={(values) => {
          const loginSchema = Yup.object().shape({
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
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
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            const data = await authService.signup(values);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user-data', JSON.stringify(data.user));
            setUser(data.user);

            setSubmitting(false);
            history.push('/');
          } catch (error) {
            if (error && error.response && error.response.data) {
              setSubmitting(false);
              setErrors(error.response.data);
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <FormWrapper dir="column" align="center" as={Form} style={{ width: '100%' }}>
            <FormField dir="column">
              <Label>First name</Label>
              <Input as={Field} type="text" name="firstName" placeholder="Mahmoud" />
              <FormError name="firstName" component="div" />
            </FormField>

            <FormField dir="column">
              <Label>Last name</Label>
              <Input as={Field} type="text" name="lastName" placeholder="Ashraf" />
              <FormError name="lastName" component="div" />
            </FormField>

            <FormField dir="column">
              <Label>Email</Label>
              <Input as={Field} type="email" name="email" placeholder="valid@email.com" />
              <FormError name="email" component="div" />
            </FormField>

            <FormField dir="column">
              <Label>Password</Label>
              <Input as={Field} type="password" name="password" placeholder="Password..." />
              <FormError name="password" component="div" />
            </FormField>

            <FormField>
              <FormButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : 'Create Account'}
              </FormButton>
            </FormField>

            <P>
              Have an account?
              <span>
                <Link color="#000" style={{ textDecoration: 'underline' }} to="/login">
                  Sign in
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
