import { UpOutlined } from '@ant-design/icons';
import { BackTop, Space } from 'antd';
import { ArticleCard } from 'components/ArticleCard';
import { ArticlesFilter } from 'components/ArticleCard/ArticlesFilter';
import React from 'react';

export const Articles = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
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
      <BackTop>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e1f26',
            color: '#ffffff',
            height: '40px',
          }}
        >
          <UpOutlined style={{ fontSize: '20px' }} />
        </div>
      </BackTop>
    </div>
  );
};
