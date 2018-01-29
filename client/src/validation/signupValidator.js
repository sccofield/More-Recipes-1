import isEmpty from 'lodash.isempty';
import validator from 'validator';

const signupvalidator = (data) => {
  const errors = {};
  if (validator.isEmpty(data.fullname)) {
    errors.fullname = 'fullname is required';
  }

  if (validator.isEmpty(data.username)) {
    errors.email = 'Email is required';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (validator.isEmpty(data.password)) {
    errors.email = 'Email is required';
  }

  if (!validator.isLength(data.password, {
    min: 6, max: 100
  })) {
    errors.password = 'Password should be at least 6 characters';
  }

  if (validator.isEmpty(data.confirmPassword)) {
    errors.email = 'Email is required';
  }

  if (!validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Passwords don\'t match';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default signupvalidator;