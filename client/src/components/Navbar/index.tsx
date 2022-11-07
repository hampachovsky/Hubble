import { MenuOutlined } from '@ant-design/icons';
import { Avatar, Col, Image, Layout, Menu, Row, MenuProps } from 'antd';
import logoUrl from 'assets/logo.svg';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
        { label: 'articles', key: '/', onClick: () => navigate('/articles', { replace: true }) },
        {
            label: 'profile',
            key: '/events',
            onClick: () => navigate('/profile', { replace: true }),
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
                <Col span={5}>
                    <Link to='/' className={style.logoWrap}>
                        <Image
                            onClick={() => navigate('/')}
                            className={style.logo}
                            preview={false}
                            src={logoUrl}
                        />
                    </Link>
                </Col>
                <Col className={style.menuRow} span={16}>
                    <Menu
                        className={style.nav}
                        theme='dark'
                        mode='horizontal'
                        selectable={false}
                        overflowedIndicator={<MenuOutlined style={{ fontSize: '20px' }} />}
                        items={menuItems}
                    >
                        {/*   <Menu.Item className={style.menuItem} key={1}>
                            Profile
                        </Menu.Item>
                        <Menu.Item
                            className={style.menuItem}
                            key={2}
                            onClick={() => navigate('/profile')}
                        ></Menu.Item>
                        <Menu.Item className={style.menuItem} key={3} onClick={handleSignOut}>
                            Logout
                        </Menu.Item> */}
                    </Menu>
                </Col>
            </Row>
        </Layout.Header>
    );
};
