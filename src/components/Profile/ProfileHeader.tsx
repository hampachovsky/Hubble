import { EditOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Tabs, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { profileRoutesName } from 'router/routes';
import style from './Profile.module.less';
import { WriteArticleModal } from './WriteArticleModal';

export const ProfileHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };
  const router = useHistory();
  return (
    <div>
      {visible && <WriteArticleModal visible={visible} toggleModal={toggleModal} />}
      <Card className={style.profileHeader} bodyStyle={{ paddingBottom: 0 }}>
        <Row>
          <Col className={style.leftSide} span={10}>
            <Avatar size={100} shape='square'>
              U
            </Avatar>
            <Typography.Title className={style.username} level={3}>
              User Name
            </Typography.Title>
          </Col>
          <Col className={style.rightSide} span={14}>
            <Tooltip title='Settings'>
              <Button shape='circle' icon={<SettingOutlined />} />
            </Tooltip>
            <Tooltip title='Write article'>
              <Button onClick={toggleModal} shape='circle' icon={<EditOutlined />} />
            </Tooltip>
            <Tooltip title='Subscribe'>
              <Button shape='round' icon={<UserAddOutlined />}>
                Subscribe
              </Button>
            </Tooltip>
          </Col>
        </Row>
        <div className={style.statusWrapper}>
          <Typography.Text className={style.status}>User status ('Hi IT's Me')</Typography.Text>
        </div>
        <Tabs
          defaultActiveKey={router.location.pathname}
          tabBarStyle={{ marginBottom: 0 }}
          onTabClick={(key) => router.push(key)}
        >
          <Tabs.TabPane tab='Articles' key={profileRoutesName.ARTICLES} />
          <Tabs.TabPane tab='Comments' key={profileRoutesName.COMMENTS} />
          <Tabs.TabPane tab='Archived' key={profileRoutesName.ARCHIVED} />
          <Tabs.TabPane tab='Rated' key={profileRoutesName.RATED} />
          <Tabs.TabPane tab='Subscriptions' key={profileRoutesName.SUBSCRIPTION} />
          <Tabs.TabPane tab='Subscribers' key={profileRoutesName.SUBSCRIBERS} />
        </Tabs>
      </Card>
    </div>
  );
};
