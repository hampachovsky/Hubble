import React, { useEffect } from 'react';
import './App.less';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProfileRoutesPath, RoutesPath } from 'constants/routes';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Profile } from 'pages/Profile';
import { Articles } from 'pages/Articles';
import { Article } from 'pages/Article';
import { fetchUserData } from 'store/slices/userSlice/thunk';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectUserIsLoading } from 'store/slices/userSlice/selectors';
import { Preloader } from 'components/common/Preloader';
import { Button, Result } from 'antd';

function App() {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectUserIsLoading);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    return isLoading ? (
        <Preloader />
    ) : (
        <Routes>
            <Route path={RoutesPath.LOGIN} element={<Login />} />
            <Route path={RoutesPath.REGISTER} element={<Register />} />
            <Route path={RoutesPath.PROFILE} element={<Profile />}>
                <Route path={ProfileRoutesPath.RATED} element={<Profile />} />
            </Route>
            <Route path={RoutesPath.ARTICLES} element={<Articles />} />
            <Route path={RoutesPath.ARTICLE} element={<Article />} />
            <Route
                path='*'
                element={
                    <Result
                        status='404'
                        title='404'
                        subTitle='Sorry, the page you visited does not exist.'
                        extra={
                            <Button type='primary' onClick={() => navigate(RoutesPath.ARTICLES)}>
                                Back Home
                            </Button>
                        }
                    />
                }
            />
        </Routes>
    );
}

export default App;
