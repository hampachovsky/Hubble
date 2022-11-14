import { Tag, Typography } from 'antd';
import { RoutesPath } from 'constants/routes';
import { IArticle } from 'models/types';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './ArticleHeader.module.less';

const { Title } = Typography;

type Props = {
    author: IArticle['author'];
    tags: IArticle['tags'];
};

export const ArticleHeader: React.FC<Props> = ({ author, tags }) => (
    <Link to={`${RoutesPath.PROFILE}${author._id}`}>
        <div className={style.userInfo}>
            <Title level={4} className={style.userName}>
                {author.username}
            </Title>
        </div>
        <div>
            {tags.map((tag, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Tag key={index}>{tag}</Tag>
            ))}
        </div>
    </Link>
);
