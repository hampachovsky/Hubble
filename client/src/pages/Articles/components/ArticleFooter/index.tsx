/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
    DislikeFilled,
    DislikeOutlined,
    LikeFilled,
    LikeOutlined,
    MessageOutlined,
} from '@ant-design/icons';
import { Col, Row, Space, Tooltip, Typography } from 'antd';
import React, { createElement, useState } from 'react';
import style from './ArticleFooter.module.less';

const { Text } = Typography;

export const ArticleFooter: React.FC = () => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState<string | null>(null);
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
                        <Text className={style.text}>23</Text>
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
                    <Text className={style.text}>{likes}</Text>
                </Col>
            </Row>
        </div>
    );
};
