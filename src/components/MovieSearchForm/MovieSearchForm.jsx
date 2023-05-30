import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { StyledForm, StyledField, Button } from './MovieSearchForm.styled';

export const MovieSearchForm = ({ onSubmit }) => {
  const initialValues = { query: '' };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    onSubmit(values.query);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ dirty, isSubmitting }) => (
        <StyledForm>
          <StyledField type="text" name="query" placeholder="Enter movie title..." />
          <Button type="submit" disabled={!dirty || isSubmitting}></Button>
        </StyledForm>
      )}
    </Formik>
  );
};

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
