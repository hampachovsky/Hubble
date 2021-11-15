import { Input } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import React, { ChangeEvent, FocusEvent } from 'react';
import { ErrorMessage } from './ErrorMessage';
import style from './Form.module.less';

type PropsType = {
  touched: boolean | undefined;
  error?: string | undefined;
  icon: any;
  name: string;
  size?: SizeType;
  type?: 'text' | 'password';
  placeholder?: string;
  value: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
};

export const FormField: React.FC<PropsType> = ({
  touched,
  error,
  icon,
  name,
  value,
  type = 'text',
  placeholder = '',
  size = 'large',
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      {touched && error ? <ErrorMessage error={error} /> : null}
      {type === 'password' ? (
        <Input.Password
          type={type}
          className={style.field}
          prefix={icon}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          size={size}
          value={value}
        />
      ) : (
        <Input
          type={type}
          className={style.field}
          prefix={icon}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          size={size}
          value={value}
        />
      )}
    </>
  );
};
