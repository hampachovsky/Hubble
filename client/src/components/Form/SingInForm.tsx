import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Space, Typography } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import style from './Form.module.less';
import { FormField } from './FormField';

const validationSchema = yup.object().shape({
  username: yup.string().required('Please enter a username'),
  password: yup.string().required('Please enter a password'),
  rememberMe: yup.boolean(),
});

type FormInitialValuesType = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export const SingInForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      rememberMe: false,
    } as FormInitialValuesType,
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
            touched={formik.touched.username}
            error={formik.errors.username}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            name={'username'}
            placeholder={'username'}
            icon={<UserOutlined />}
            value={formik.values.username}
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
            value={formik.values.password}
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
