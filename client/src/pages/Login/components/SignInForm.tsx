import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Space, Typography } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { ErrorMessage } from 'components/common/ErrorMessage';
import { RoutesPath } from 'constants/routes';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useClearUserError } from 'hooks/useClearUserError';
import { SignInPayload } from 'models/utilsTypes';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { selectUserIsLoading } from 'store/slices/userSlice/selectors';
import { fetchSignIn } from 'store/slices/userSlice/thunk';
import * as yup from 'yup';
import style from './forms.module.less';

const validationSchema = yup
    .object()
    .shape({
        username: yup.string().required('Please enter a username'),
        password: yup.string().required('Please enter a password'),
        rememberMe: yup.boolean(),
    })
    .required();
export const SignInForm: React.FC = () => {
    const isLoading = useAppSelector(selectUserIsLoading);
    const error = useAppSelector((state) => state.userReducer.error);
    const dispatch = useAppDispatch();
    const { handleClear } = useClearUserError();

    const {
        handleSubmit,
        control,
        formState: { errors, isDirty, isValid, isSubmitting },
    } = useForm<SignInPayload>({
        defaultValues: {
            username: '',
            password: '',
            rememberMe: false,
        },
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
        reValidateMode: 'onSubmit',
    });

    const onSubmit: SubmitHandler<SignInPayload> = async (data) => {
        await dispatch(fetchSignIn(data));
    };

    return (
        <div>
            <Typography.Title style={{ textAlign: 'center' }} level={2}>
                Login
            </Typography.Title>
            <form action='submit' onSubmit={handleSubmit(onSubmit)}>
                <Space align='center' direction='vertical'>
                    {error && <ErrorMessage error={error} />}
                    {errors.username?.message && <ErrorMessage error={errors.username.message} />}
                    <Controller
                        name='username'
                        control={control}
                        render={({ field }) => (
                            <Input
                                className={style.field}
                                type='text'
                                placeholder='username'
                                {...field}
                            />
                        )}
                    />
                    {errors.password?.message && <ErrorMessage error={errors.password.message} />}
                    <Controller
                        name='password'
                        control={control}
                        render={({ field }) => (
                            <Input.Password
                                className={style.field}
                                type='password'
                                placeholder='password'
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name='rememberMe'
                        control={control}
                        render={({ field }) => (
                            <Checkbox checked={field.value} {...field}>
                                <Typography.Title level={5}>Remember me</Typography.Title>
                            </Checkbox>
                        )}
                    />

                    <Button
                        disabled={!isDirty || !isValid || isSubmitting}
                        className={style.submitBtn}
                        size='large'
                        type='primary'
                        htmlType='submit'
                        loading={isLoading}
                    >
                        Login
                    </Button>
                    <div>
                        <Typography.Title level={5}>
                            Or
                            <Link to={RoutesPath.REGISTER} onClick={handleClear}>
                                {' '}
                                Register now!
                            </Link>
                        </Typography.Title>
                    </div>
                </Space>
            </form>
        </div>
    );
};
