/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Card, Typography } from 'antd';
import { IArticle } from 'models/types';
import moment from 'moment';
import { ArticleFooter } from 'pages/Articles/components/ArticleFooter';
import { ArticleHeader } from 'pages/Articles/components/ArticleHeader';
import React from 'react';
import { parseToHtml } from 'utils/parseToHTML';
import style from './Article.module.less';

const { Title } = Typography;

type Props = IArticle;

export const ArticleComponent: React.FC<Props> = ({
    author,
    title,
    created,
    content,
    comments,
    likes,
    likedBy,
    id,
    tags,
}) => (
    <div className={style.articleWrapper}>
        <Card
            className={style.article}
            title={<ArticleHeader author={author} tags={tags} />}
            extra={<Title level={5}>{`${moment(created).fromNow()}`}</Title>}
        >
            <Title className={style.articleTitle} level={1}>
                {title}
            </Title>
            <Typography className={style.articleContent}>{parseToHtml(content)}</Typography>

            <ArticleFooter id={id} likedBy={likedBy} likes={likes} comments={comments} />
        </Card>
    </div>
);
