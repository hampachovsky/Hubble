import { Space } from 'antd';
import { ArticleCard } from 'components/Card/ArticleCard';
import React from 'react';
import { useHistory } from 'react-router';
import { profileRoutesName } from 'router/routes';

export const ProfileContent: React.FC = () => {
  const router = useHistory();

  console.log(router.location.pathname);

  return (
    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center' }}>
      <Space direction='vertical' size='large'>
        {getProfileContent(router.location.pathname)}
      </Space>
    </div>
  );
};

const getProfileContent = (path: string): any => {
  switch (path) {
    case profileRoutesName.ARCHIVED: {
      return <div>Archived</div>;
    }

    case profileRoutesName.COMMENTS: {
      return <div>Comments</div>;
    }
    case profileRoutesName.RATED: {
      return <div>Rated</div>;
    }
    case profileRoutesName.SUBSCRIBERS: {
      return <div>Subscribers</div>;
    }
    case profileRoutesName.SUBSCRIPTION: {
      return <div>Subscription</div>;
    }
    default: {
      return (
        <Space direction='vertical' size='large'>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Space>
      );
    }
  }
};
