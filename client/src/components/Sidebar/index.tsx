import { Menu, MenuProps, notification } from 'antd';
import { useAppSelector } from 'hooks/redux';
import React from 'react';
import style from './Sidebar.module.less';

export const Sidebar: React.FC = () => {
    const [notify, contextHolder] = notification.useNotification();
    const categories = useAppSelector((state) => state.categoryReducer.categories);
    const categoryError = useAppSelector((state) => state.categoryReducer.error);
    if (!categories) notify.error({ message: categoryError });
    const transformCategory = categories?.map((category) => ({
        label: category.categoryName,
        key: category.id,
    }));
    const sidebarItems: MenuProps['items'] = [
        {
            label: 'All',
            key: 'all',
        },
        ...transformCategory!,
    ];
    return (
        <div className={style.siderContainer}>
            <Menu
                mode='inline'
                title='Categories'
                defaultSelectedKeys={['1']} // TODO: Place dynamically
                className={style.siderMenu}
                style={{ height: '100%' }}
                items={sidebarItems}
            />
        </div>
    );
};
