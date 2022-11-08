import { MenuOutlined } from '@ant-design/icons';
import { Col, Image, Layout, Menu, Row, MenuProps } from 'antd';
import logoUrl from 'assets/logo.svg';
import { RoutesPath } from 'constants/routes';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './Navbar.module.less';

export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignOut = (): any => {
        navigate('/login');
    };

    const [current, setCurrent] = useState(location.pathname);

    const menuItems: MenuProps['items'] = [
        {
            label: 'articles',
            key: RoutesPath.ARTICLES,
            onClick: () => navigate(RoutesPath.ARTICLES, { replace: true }),
        },
        {
            label: 'profile',
            key: RoutesPath.PROFILE,
            onClick: () => navigate(RoutesPath.PROFILE, { replace: true }),
        },
        {
            label: `logout (username)`,
            key: 'logout',
            onClick: () => {
                navigate('logout', { replace: true });
            },
        },
    ];
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Layout.Header className={style.header}>
            <Row justify='space-around' className={style.row}>
                <Col span={3}>
                    <Link to={RoutesPath.ARTICLES} className={style.logoWrap}>
                        <Image className={style.logo} preview={false} src={logoUrl} />
                    </Link>
                </Col>
                <Col className={style.menuRow} span={14}>
                    <Menu
                        className={style.nav}
                        theme='dark'
                        mode='horizontal'
                        selectable={false}
                        overflowedIndicator={<MenuOutlined style={{ fontSize: '20px' }} />}
                        items={menuItems}
                    ></Menu>
                </Col>
            </Row>
        </Layout.Header>
    );
};
