import { Card, Typography } from 'antd';
import { RoutesPath } from 'constants/routes';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.less';

type TabListType = {
    key: string;
    tab: string;
};

const tabList: Array<TabListType> = [
    {
        key: 'all',
        tab: 'All',
    },
    {
        key: 'byRating',
        tab: 'Popular',
    },
    {
        key: 'byDate',
        tab: 'Older',
    },
    {
        key: 'liked',
        tab: 'Liked',
    },
];

export const ArticlesFilter: React.FC = () => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabChange = (key: string) => {
        setActiveTab(key);
    };

    return (
        <div className={style.cardWrapper}>
            <Card
                title={<Typography.Title level={4}>Articles filtration</Typography.Title>}
                className={style.card}
                tabList={tabList}
                activeTabKey={activeTab}
                onTabChange={(key: string) => {
                    handleTabChange(key);
                }}
                bodyStyle={{ paddingBottom: 0 }}
            >
                <Link to={RoutesPath.SEARCH}>
                    <p style={{ textAlign: 'right' }}>To search</p>
                </Link>
            </Card>
        </div>
    );
};
