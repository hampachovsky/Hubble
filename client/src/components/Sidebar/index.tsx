import { Menu, MenuProps, notification } from 'antd';
import { RoutesPath } from 'constants/routes';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchArticles } from 'store/slices/articlesSlice/thunk';
import { fetchArticlesByCategory } from 'store/slices/categorySlice/thunk';
import style from './Sidebar.module.less';

export const Sidebar: React.FC = () => {
    const [notify, contextHolder] = notification.useNotification();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const categories = useAppSelector((state) => state.categoryReducer.categories);
    const categoryError = useAppSelector((state) => state.categoryReducer.error);
    if (!categories) notify.error({ message: categoryError });
    const transformCategory = categories?.map((category) => ({
        label: category.categoryName,
        key: category.id,
        onClick: () => {
            dispatch(fetchArticlesByCategory(category));
            navigate(RoutesPath.ARTICLES);
        },
    }));
    const sidebarItems: MenuProps['items'] = [
        {
            label: 'All',
            key: 'all',
            onClick: () => {
                dispatch(fetchArticles());
                navigate(RoutesPath.ARTICLES);
            },
        },
        ...transformCategory!,
    ];
    return (
        <div className={style.siderContainer}>
            <Menu
                mode='inline'
                title='Categories'
                defaultSelectedKeys={['1']}
                className={style.siderMenu}
                style={{ height: '100%' }}
                items={sidebarItems}
            />
        </div>
    );
};
