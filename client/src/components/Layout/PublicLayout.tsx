import { Layout } from 'antd';
import { Footer } from 'components/Footer';
import { useAppSelector } from 'hooks/redux';
import { LocationStateType } from 'models/utilsTypes';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesPath } from 'constants/routes';

type Props = {
    children: JSX.Element;
};

export const PublicLayout: React.FC<Props> = ({ children }) => {
    const isAuth = useAppSelector((state) => state.userReducer.isAuth);
    const location = useLocation();
    const locationState = location.state as LocationStateType;
    let redirectPath: string =
        locationState === null
            ? RoutesPath.ARTICLES
            : locationState.from.pathname + locationState.from.search;
    if (locationState && locationState.from.pathname === location.pathname) {
        redirectPath = RoutesPath.ARTICLES;
    }

    if (isAuth) return <Navigate to={redirectPath} state={{ from: location }} replace />;
    return (
        <Layout>
            <Layout.Content style={{ padding: '0 50px', minHeight: '89vh', margin: '16px 0' }}>
                <div
                    style={{
                        minHeight: '89vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {children}
                </div>
            </Layout.Content>
            <Footer />
        </Layout>
    );
};
