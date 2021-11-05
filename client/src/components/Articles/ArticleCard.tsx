import { Card } from 'antd';
import React from 'react';
import style from './Articles.module.less';

export const ArticleCard = () => {
  return (
    <div className={style.articleWrapper}>
      <Card className={style.card} title='Card title'>
        <p>Card content </p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};
