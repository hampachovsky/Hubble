import { Layout } from 'antd';
import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesPath } from 'constants/routes';
import { Sidebar } from 'components/Sidebar';
import { useWindowResize } from 'hooks/useWindowSize';

type Props = {
    children: JSX.Element;
};

export const PrivateLayout: React.FC<Props> = ({ children }) => {
    const [siderWidth, setSiderWidth] = useState(200);
    const windowSize = useWindowResize();
    useEffect(() => {
        if (windowSize.width < 600) setSiderWidth(100);
        else if (windowSize.width < 484) setSiderWidth(35);
        else setSiderWidth(200);
    }, [windowSize]);
    const isAuth = useAppSelector((state) => state.userReducer.isAuth);
    const location = useLocation();
    if (!isAuth) return <Navigate to={RoutesPath.LOGIN} state={{ from: location }} replace />;
    return (
        <Layout className='layout'>
            <Layout.Header>
                <Navbar />
            </Layout.Header>
            <Layout style={{ padding: '0 50px', minHeight: '100vh', margin: '16px 0' }}>
                <Layout.Sider
                    width={siderWidth}
                    style={{
                        height: '100%',
                        marginTop: '24px',
                        marginRight: '20px',
                    }}
                >
                    <Sidebar />
                </Layout.Sider>
                <Layout.Content>
                    <div
                        style={{
                            minHeight: '100vh',
                            padding: '24px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {children}
                    </div>
                </Layout.Content>
            </Layout>
            <Footer />
        </Layout>
    );
};
