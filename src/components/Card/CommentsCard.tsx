import React from 'react';
import style from './Card.module.less';
import { List, Avatar, Space, Card, Typography } from 'antd';
import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const listData: any = [];
for (let i = 0; i < 6; i++) {
  listData.push({
    href: '/profile',
    title: `Comment ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

export const CommentsCard: React.FC = () => {
  return (
    <div className={style.cardWrapper}>
      <Card className={style.card} title={<Typography.Title level={4}>Comments</Typography.Title>}>
        <List
          itemLayout='vertical'
          size='large'
          dataSource={listData}
          renderItem={(item: any) => (
            <List.Item
              key={item.title}
              actions={[
                <div>
                  <Space>
                    <LikeOutlined />
                    11
                  </Space>
                </div>,
                <div>
                  <Space>
                    <MessageOutlined />3
                  </Space>
                </div>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar shape='square' src={item.avatar} />}
                title={
                  <Link to={item.href} style={{ fontSize: '17px', fontWeight: 'bold' }}>
                    {item.title}
                  </Link>
                }
                description={item.description}
              />
              <Typography.Text style={{ fontSize: '16px' }}>{item.content}</Typography.Text>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};
