import { MenuOutlined } from '@ant-design/icons';
import { Col, Image, Layout, Menu, MenuProps, Row } from 'antd';
import logoUrl from 'assets/logo.svg';
import { RoutesPath } from 'constants/routes';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { resetArticlesState } from 'store/slices/articlesSlice/articlesSlice';
import { resetCategoryState } from 'store/slices/categorySlice/categorySlice';
import { resetCommentsState } from 'store/slices/commentSlice/commentSlice';
import { logout } from 'store/slices/userSlice/userSlice';
import style from './Navbar.module.less';

export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const username = useAppSelector((state) => state.userReducer.user?.username);
    const dispatch = useAppDispatch();

    const handleSignOut = (): any => {
        navigate(RoutesPath.LOGIN, { replace: true });
        dispatch(logout());
        dispatch(resetCommentsState());
        dispatch(resetCategoryState());
        dispatch(resetArticlesState());
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
            label: `logout (${username})`,
            key: 'logout',
            onClick: () => {
                handleSignOut();
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
                        onClick={onClick}
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
