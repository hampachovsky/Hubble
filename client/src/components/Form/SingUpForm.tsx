import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Space, Typography } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import style from './Form.module.less';
import { FormField } from './FormField';

let validationSchema = yup.object().shape({
  username: yup
    .string()
    .strict()
    .trim('Username must be a trimmed string')
    .min(6, 'Please enter a username (min 6 characters).')
    .max(20, 'Please enter a username (max 20 characters).')
    .required('Please enter a username'),

  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Please enter a email address'),
  password: yup
    .string()
    .min(6, 'Please enter a password (min 8 characters).')
    .required('Please enter a password'),
  passwordConfirmation: yup
    .string()
    .required('Please confirm a password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

type TFormInitialValues = {
  email: string;
  password: string;
  username: string;
  passwordConfirmation: string;
};

export const SingUpForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      passwordConfirmation: '',
    } as TFormInitialValues,
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: (values, actions) => {
      console.log(values.username.replace(/\s/g, ''));
      actions.setSubmitting(false);
    },
  });
  return (
    <div className={style.formWrapper}>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <Space align='center' direction='vertical'>
          <FormField
            touched={formik.touched.email}
            error={formik.errors.email}
            value={formik.values.email}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            name={'email'}
            placeholder={'Email'}
            icon={<MailOutlined />}
          />
          <FormField
            touched={formik.touched.username}
            error={formik.errors.username}
            value={formik.values.username}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            name={'username'}
            placeholder={'Username'}
            icon={<UserOutlined />}
          />
          <FormField
            touched={formik.touched.password}
            error={formik.errors.password}
            value={formik.values.password}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type={'password'}
            name={'password'}
            placeholder={'Password'}
            icon={<LockOutlined />}
          />
          <FormField
            touched={formik.touched.passwordConfirmation}
            error={formik.errors.passwordConfirmation}
            value={formik.values.passwordConfirmation}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type={'password'}
            name={'passwordConfirmation'}
            placeholder={'Confirm password'}
            icon={<LockOutlined />}
          />
          <Button
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
            className={style.submitBtn}
            size='large'
            type='primary'
            htmlType='submit'
          >
            Sign up
          </Button>
          <div>
            <Typography.Title level={5}>
              Have an account? <Link to='/login'>Log in</Link>
            </Typography.Title>
          </div>
        </Space>
      </form>
    </div>
  );
};
