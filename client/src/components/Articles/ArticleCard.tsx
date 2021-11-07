import { BookOutlined, DownOutlined, MessageOutlined, UpOutlined } from '@ant-design/icons';
import { Card, Row, Tag, Typography } from 'antd';
import React from 'react';
import style from './Articles.module.less';

export const ArticleCard = () => {
  return (
    <div className={style.articleWrapper}>
      <Card
        className={style.card}
        title={
          <>
            Title '''''''''''''''' Author
            <div>
              <Tag>#somthing</Tag>
              <Tag>#cool</Tag>
              <Tag>#new</Tag>
            </div>
          </>
        }
        extra={'12 hours ago'}
      >
        <Typography.Paragraph>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eius totam iste quo
          exercitationem nihil quos facere explicabo hic id vero, nostrum ab ullam, nesciunt
          blanditiis et, voluptatum expedita aspernatur.
        </Typography.Paragraph>
        <Row justify='space-around'>
          <MessageOutlined style={{ fontSize: '20px' }} />
          <BookOutlined />
          <div>
            <UpOutlined /> 0 <DownOutlined />
          </div>
        </Row>
      </Card>
    </div>
  );
};
