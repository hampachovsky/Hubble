import { Space } from 'antd';
import { ArticleCard } from 'components/Card/ArticleCard';
import { AuthorList } from 'components/Card/AuthorList';
import { CommentsCard } from 'components/Card/CommentsCard';
import { BackToTop } from 'components/common/BackToTop';
import React from 'react';
import { useHistory } from 'react-router';
import { profileRoutesName } from 'router/routes';

export const ProfileContent: React.FC = () => {
  const router = useHistory();

  return (
    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center' }}>
      <Space direction='vertical' size='large'>
        {getProfileContent(router.location.pathname)}
      </Space>
      <BackToTop />
    </div>
  );
};

const getProfileContent = (path: string) => {
  switch (path) {
    case profileRoutesName.ARCHIVED: {
      return (
        <Space direction='vertical' size='large'>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Space>
      );
    }

    case profileRoutesName.COMMENTS: {
      return <CommentsCard />;
    }
    case profileRoutesName.RATED: {
      return (
        <Space direction='vertical' size='large'>
          <ArticleCard />
        </Space>
      );
    }
    case profileRoutesName.SUBSCRIBERS: {
      return <AuthorList title='Subscribers' />;
    }
    case profileRoutesName.SUBSCRIPTION: {
      return <AuthorList title='Subscription' />;
    }
    default: {
      return (
        <Space direction='vertical' size='large'>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Space>
      );
    }
  }
};
