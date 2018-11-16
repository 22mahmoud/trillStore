import React from 'react';

import { Formik } from 'formik';
import { Input } from '../ui/components';

export default () => (
  <Formik
    initialValues={{ text: '' }}
    validate={(values) => {
      const errors = {};
      if (!values.text) {
        errors.text = 'Required';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      console.log('SUBMITED!', values.text);
      setSubmitting(false);
    }}
  >
    {({
      values, handleChange, handleBlur, handleSubmit,
    }) => (
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="search .."
          type="text"
          name="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.text}
        />
      </form>
    )}
  </Formik>
);
