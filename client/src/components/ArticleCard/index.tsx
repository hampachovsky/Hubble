import { Avatar, Card, Tag, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { routesName } from 'router/routes';
import style from './Articles.module.less';
import { CardFooter } from './CardFooter';

const { Title } = Typography;

export const ArticleCard = () => {
  return (
    <div className={style.cardWrapper}>
      <Card
        className={style.card}
        title={
          <>
            <Link to={routesName.PROFILE}>
              <div className={style.userInfo}>
                <Avatar shape='square'>U</Avatar>
                <Title level={5} className={style.userName}>
                  Author
                </Title>
              </div>
              <div>
                <Tag>#somthing</Tag>
                <Tag>#cool</Tag>
                <Tag>#new</Tag>
              </div>
            </Link>
          </>
        }
        extra='12 hours ago'
      >
        <Link to={'/article/1'}>
          <Title level={5}>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Inventore, deserunt.
          </Title>
        </Link>
        <CardFooter />
      </Card>
    </div>
  );
};
