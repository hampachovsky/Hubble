import { Avatar, Tag, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { routesName } from 'router/routes';
import style from './ArticleHeader.module.less';

const { Title } = Typography;

export const ArticleHeader: React.FC = () => {
  return (
    <>
      <Link to={routesName.PROFILE}>
        <div className={style.userInfo}>
          <Avatar shape='square'>U</Avatar>

          <Title level={4} className={style.userName}>
            Author
          </Title>
        </div>
        <div>
          <Tag className={style.tags}>#somthing</Tag>
          <Tag>#cool</Tag>
          <Tag>#new</Tag>
        </div>
      </Link>
    </>
  );
};
