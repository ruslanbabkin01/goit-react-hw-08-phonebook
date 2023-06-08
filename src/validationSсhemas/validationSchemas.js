import * as yup from 'yup';

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const phoneRegex = /^\+380\d{9}$/;

const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/;

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name should have at least 3 characters')
    .matches(nameRegex, 'Only letters can be accepted')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .matches(emailRegex, 'Please enter a valid email address')
    .required('Email is required'),
  password: yup.string().min(6).required('Password is required'),
});

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .matches(emailRegex, 'Please enter a valid email address')
    .required('Email is required'),
  password: yup.string().min(6).required(),
});

export const contactValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .matches(nameRegex, 'Invalid name')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .matches(emailRegex, 'Please enter a valid email address')
    .required('Email is required'),
  number: yup
    .string()
    .matches(phoneRegex, 'Example: "+380xxxxxxxxx"')
    .required('Phone number is required'),
});
