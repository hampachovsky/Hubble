import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Space, Typography } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import style from './Form.module.less';
import { FormField } from './FormField';

let validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Please enter a email address'),
  password: yup.string().required('Please enter a password'),
  rememberMe: yup.boolean(),
});

type TFormInitialValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const SingInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    } as TFormInitialValues,
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: (values, actions) => {
      console.log(values);
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
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            name={'email'}
            placeholder={'Email'}
            icon={<MailOutlined />}
          />
          <FormField
            touched={formik.touched.password}
            error={formik.errors.password}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type={'password'}
            name={'password'}
            placeholder={'Password'}
            icon={<LockOutlined />}
          />
          <Checkbox name='rememberMe' onChange={formik.handleChange}>
            <Typography.Title level={5}>Remember me</Typography.Title>
          </Checkbox>
          <Button
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
            className={style.submitBtn}
            size='large'
            type='primary'
            htmlType='submit'
          >
            Log in
          </Button>
          <div>
            <Typography.Title level={5}>
              Or <Link to='/register'>register now!</Link>
            </Typography.Title>
          </div>
        </Space>
      </form>
    </div>
  );
};
