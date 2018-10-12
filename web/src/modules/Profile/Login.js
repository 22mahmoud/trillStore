import React from 'react';
import {
  Formik, Form, Field, validateYupSchema, yupToFormErrors,
} from 'formik';
import * as Yup from 'yup';

import { Input } from '../../shared/ui/components';
import {
  FormButton, FormError, FormWrapper, FormField,
} from '../../shared/ui/form';

export default () => (
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
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log(values);
        setSubmitting(false);
      }, 1000);
    }}
  >
    {({ isSubmitting }) => (
      <FormWrapper dir="column" align="center" as={Form}>
        <FormField dir="column">
          <Input as={Field} type="email" name="email" placeholder="valid@email.com" />
          <FormError name="email" component="div" />
        </FormField>

        <FormField dir="column">
          <Input as={Field} type="password" name="password" placeholder="Password..." />
          <FormError name="password" component="div" />
        </FormField>

        <FormField>
          <FormButton type="submit" disabled={isSubmitting}>
            Submit
          </FormButton>
        </FormField>
      </FormWrapper>
    )}
  </Formik>
);
