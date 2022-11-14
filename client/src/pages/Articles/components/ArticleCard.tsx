import { Card, Typography } from 'antd';
import { IArticle, IUser } from 'models/types';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleFooter } from './ArticleFooter';
import { ArticleHeader } from './ArticleHeader';
import style from './Card.module.less';

const { Title } = Typography;
type Props = IArticle;

export const ArticleCard: React.FC<Props> = ({
    author,
    title,
    created,
    comments,
    likes,
    likedBy,
    id,
    tags,
}) => (
    <div className={style.cardWrapper}>
        <Card
            className={style.card}
            title={<ArticleHeader tags={tags} author={author} />}
            extra={`${moment(created).fromNow()}`}
        >
            <Link to={`/article/${id}`}>
                <Title level={5}>{title}</Title>
            </Link>
            <ArticleFooter likes={likes} likedBy={likedBy} comments={comments} />
        </Card>
    </div>
);
