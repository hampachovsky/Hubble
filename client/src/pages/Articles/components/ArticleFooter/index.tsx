import { LikeFilled, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IArticle } from 'models/types';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchChangeLike } from 'store/slices/articlesSlice/thunk';
import style from './ArticleFooter.module.less';

const { Text } = Typography;

type Props = {
    id: IArticle['id'];
    likes: IArticle['likes'];
    likedBy: IArticle['likedBy'];
    comments: IArticle['comments'];
};

export const ArticleFooter: React.FC<Props> = ({ likes, likedBy, comments, id }) => {
    const userId = useAppSelector((state) => state.userReducer.user?._id);
    const dispatch = useAppDispatch();
    const isLiked = likedBy.includes(userId!);

    const handleLike = () => {
        dispatch(fetchChangeLike({ type: 'addLike', articleId: id }));
    };

    const handleDislike = () => {
        dispatch(fetchChangeLike({ type: 'removeLike', articleId: id }));
    };
    return (
        <div>
            <Row align='middle' justify='start' className={style.articleFooter}>
                <Col span={14} className={style.leftControlls}>
                    <div className={style.controllItem}>
                        <Link style={{ color: 'black' }} to={`/article/${id}`}>
                            <MessageOutlined />
                            <Text className={style.text}>{comments.length}</Text>
                        </Link>
                    </div>
                </Col>
                <Col span={10} className={style.rightControlls}>
                    <Tooltip title={isLiked ? 'Remove like' : 'Like'}>
                        {isLiked ? (
                            <LikeFilled onClick={handleDislike} />
                        ) : (
                            <LikeOutlined onClick={handleLike} />
                        )}
                    </Tooltip>
                    <Text className={style.text}>{likes}</Text>
                </Col>
            </Row>
        </div>
    );
};
