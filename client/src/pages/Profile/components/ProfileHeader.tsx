import { EditOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Tabs, Tooltip, Typography } from 'antd';
import { ProfileRoutesPath } from 'constants/routes';
import { useAppSelector } from 'hooks/redux';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './Profile.module.less';
import { WriteArticleModal } from './WriteArticleModal';

export const ProfileHeader: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const username = useAppSelector((state) => state.userReducer.user?.username);
    const location = useLocation();
    const toggleModal = () => {
        setVisible(!visible);
    };
    const navigate = useNavigate();
    return (
        <div>
            {visible && <WriteArticleModal open={visible} toggleModal={toggleModal} />}
            <Card className={style.profileHeader} bodyStyle={{ paddingBottom: 0 }}>
                <Row>
                    <Col className={style.leftSide} span={10}>
                        <Avatar size={100} shape='square'>
                            U
                        </Avatar>
                        <Typography.Title className={style.username} level={3}>
                            {username}
                        </Typography.Title>
                    </Col>
                    <Col className={style.rightSide} span={14}>
                        <Tooltip title='Write article'>
                            <Button onClick={toggleModal} shape='circle' icon={<EditOutlined />} />
                        </Tooltip>
                    </Col>
                </Row>

                <Tabs
                    defaultActiveKey={location.pathname}
                    tabBarStyle={{ marginBottom: 0 }}
                    onTabClick={(key) => {
                        navigate(key);
                    }}
                    items={[
                        { label: 'Articles', key: ProfileRoutesPath.ARTICLES },
                        { label: 'Liked Articles', key: ProfileRoutesPath.RATED },
                    ]}
                />
            </Card>
        </div>
    );
};
