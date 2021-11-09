import { Card, Typography } from 'antd';
import { ArticleFooter } from 'components/Article/ArticleFooter';
import { ArticleHeader } from 'components/Article/ArticleHeader';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.less';

const { Title } = Typography;

export const ArticleCard: React.FC = () => {
  return (
    <div className={style.cardWrapper}>
      <Card className={style.card} title={<ArticleHeader />} extra={'12 hours ago'}>
        <Link to={'/article/1'}>
          <Title level={5}>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Inventore, deserunt.
          </Title>
        </Link>
        <ArticleFooter />
      </Card>
    </div>
  );
};
