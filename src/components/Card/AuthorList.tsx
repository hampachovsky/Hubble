import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, List, Tooltip, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.less';

const listData: any = [];
for (let i = 0; i < 6; i++) {
  listData.push({
    id: i,
    href: '/profile',
    title: `Author ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

type PropsType = {
  title: string;
};

export const AuthorList: React.FC<PropsType> = ({ title }) => {
  return (
    <div className={style.cardWrapper}>
      <Card className={style.card} title={<Typography.Title level={4}>{title}</Typography.Title>}>
        <List
          dataSource={listData}
          renderItem={(item: any) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar shape='square' src={item.avatar} />}
                title={
                  <Link to={item.href} style={{ fontSize: '17px', fontWeight: 'bold' }}>
                    {item.title}
                  </Link>
                }
                description={item.email}
              />
              <div>
                <Tooltip title='Subscribe'>
                  <Button shape='round' icon={<UserAddOutlined />}>
                    Subscribe
                  </Button>
                </Tooltip>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};
