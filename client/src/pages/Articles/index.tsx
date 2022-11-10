import { Space, Typography } from 'antd';
import { BackToTop } from 'components/common/BackToTop';
import { PrivateLayout } from 'components/Layout/PrivateLayout';
import React from 'react';
import { ArticleCard } from './components/ArticleCard';
import { ArticlesFilter } from './components/ArticlesFIlter';

export const Articles: React.FC = () => (
    <PrivateLayout>
        <>
            <Space direction='vertical' align='center'>
                <ArticlesFilter />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </Space>
            <BackToTop />
        </>
    </PrivateLayout>
);
