import { LikeFilled, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Col, Row, Space, Tooltip, Typography } from 'antd';
import { useAppSelector } from 'hooks/redux';
import { IArticle } from 'models/types';
import React, { createElement, useState } from 'react';
import style from './ArticleFooter.module.less';

const { Text } = Typography;

type Props = {
    likes: IArticle['likes'];
    likedBy: IArticle['likedBy'];
    comments: IArticle['comments'];
};

export const ArticleFooter: React.FC<Props> = ({ likes, likedBy, comments }) => {
    const userId = useAppSelector((state) => state.userReducer.user?._id);

    const [likesCount, setLikes] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);
    const [, setDislikes] = useState(0);
    const [action, setAction] = useState<string | null>(
        likedBy.includes(userId!) ? 'liked' : 'unliked',
    );
    const handleLike = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const handleDislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };
    return (
        <div>
            <Row align='middle' justify='start' className={style.articleFooter}>
                <Col span={14} className={style.leftControlls}>
                    <div className={style.controllItem}>
                        <MessageOutlined />
                        <Text className={style.text}>{comments.length}</Text>
                    </div>
                </Col>
                <Col span={10} className={style.rightControlls}>
                    <Tooltip title={action === 'liked' ? 'Like' : 'Remove like'}>
                        {action === 'liked' ? (
                            <LikeFilled onClick={handleDislike} />
                        ) : (
                            <LikeOutlined onClick={handleLike} />
                        )}
                    </Tooltip>
                    <Text className={style.text}>{likesCount}</Text>
                </Col>
            </Row>
        </div>
    );
};
