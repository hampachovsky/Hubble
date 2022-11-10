import { Tag, Typography } from 'antd';
import { RoutesPath } from 'constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './ArticleHeader.module.less';

const { Title } = Typography;

export const ArticleHeader: React.FC = () => (
    <Link to={RoutesPath.PROFILE}>
        <div className={style.userInfo}>
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
);
