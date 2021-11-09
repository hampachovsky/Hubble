import { Space } from 'antd';
import { ArticleCard } from 'components/Card/ArticleCard';
import { ArticlesFilter } from 'components/Card/ArticlesFilter';
import { BackToTop } from 'components/common/BackToTop';
import React from 'react';

export const Articles: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};
