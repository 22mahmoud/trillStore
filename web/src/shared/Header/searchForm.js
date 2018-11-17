import React from 'react';

import { Formik } from 'formik';
import { Search } from 'styled-icons/fa-solid';
import { Input, Absolute, Relative } from '../ui/components';
import rem from '../ui/utils/rem';

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
        <Relative>
          <Input
            placeholder="search .."
            type="text"
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
          <Absolute onClick={handleSubmit} style={{ marginRight: rem(10) }}>
            <Search size={16} />
          </Absolute>
        </Relative>
      </form>
    )}
  </Formik>
);
