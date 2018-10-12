import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
  Formik, Form, Field, validateYupSchema, yupToFormErrors,
} from 'formik';
import * as Yup from 'yup';

import { signup } from '../../store/auth/auth.actions';
import { Input } from '../../shared/ui/components';
import {
  FormButton, FormError, FormWrapper, FormField,
} from '../../shared/ui/form';
import Spinner from '../../shared/ui/spinner';

const mapStateToProps = ({ authReducer: { loading } }) => ({ loading });

export default connect(mapStateToProps)(({ loading, dispatch }) => (
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
      const res = await dispatch(signup(values));

      if (res && res.payload && res.payload.error) {
        setErrors(res.payload.error);
      }

      if (res === true) {
        dispatch(push('/'));
      }

      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <FormWrapper dir="column" align="center" as={Form}>
        <FormField dir="column">
          <Input as={Field} type="text" name="firstName" placeholder="Mahmoud" />
          <FormError name="firstName" component="div" />
        </FormField>

        <FormField dir="column">
          <Input as={Field} type="text" name="lastName" placeholder="Ashraf" />
          <FormError name="lastName" component="div" />
        </FormField>

        <FormField dir="column">
          <Input as={Field} type="email" name="email" placeholder="valid@email.com" />
          <FormError name="email" component="div" />
        </FormField>

        <FormField dir="column">
          <Input as={Field} type="password" name="password" placeholder="Password..." />
          <FormError name="password" component="div" />
        </FormField>

        <FormField>
          <FormButton type="submit" disabled={isSubmitting || loading}>
            {loading ? <Spinner /> : 'signup'}
          </FormButton>
        </FormField>
      </FormWrapper>
    )}
  </Formik>
));
