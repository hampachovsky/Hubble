import { Input, Typography } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import React, { ChangeEvent, FocusEvent } from 'react';
import style from './Form.module.less';

type PropsType = {
  touched: boolean | undefined;
  error?: string | undefined;
  icon: any;
  name: string;
  size?: SizeType;
  type?: 'text' | 'password';
  placeholder?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
};

export const FormField: React.FC<PropsType> = ({
  touched,
  error,
  icon,
  name,
  type = 'text',
  placeholder = '',
  size = 'large',
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      <div style={{ textAlign: 'center', width: 230 }}>
        {touched ? (
          <Typography.Text type='danger' strong>
            {error}
          </Typography.Text>
        ) : null}
      </div>
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
        />
      )}
    </>
  );
};
