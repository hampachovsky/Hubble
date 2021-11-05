import { Space } from 'antd';
import { ArticleCard } from 'components/Articles/ArticleCard';
import React from 'react';

export const Articles = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
      <Space direction='vertical' align='center'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Space>
    </div>
  );
};
