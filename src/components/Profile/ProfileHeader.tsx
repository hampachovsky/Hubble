import { SettingOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Tabs, Tooltip, Typography } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { profileRoutesName } from 'router/routes';
import style from './Profile.module.less';

export const ProfileHeader: React.FC = () => {
  const router = useHistory();
  return (
    <div>
      <Card className={style.profileHeader} bodyStyle={{ paddingBottom: 0 }}>
        <Row>
          <Col className={style.leftSide} span={12}>
            <Avatar size={100} shape='square'>
              U
            </Avatar>
            <Typography.Title className={style.username} level={3}>
              User Name
            </Typography.Title>
          </Col>
          <Col className={style.rightSide} span={12}>
            <Tooltip title='Settings'>
              <Button shape='circle' icon={<SettingOutlined />} />
            </Tooltip>
            <Tooltip title='Settings'>
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
          <Tabs.TabPane tab='Articles' key={profileRoutesName.ARTICLES}></Tabs.TabPane>
          <Tabs.TabPane tab='Comments' key={profileRoutesName.COMMENTS}></Tabs.TabPane>
          <Tabs.TabPane tab='Archived' key={profileRoutesName.ARCHIVED}></Tabs.TabPane>
          <Tabs.TabPane tab='Rated' key={profileRoutesName.RATED}></Tabs.TabPane>
          <Tabs.TabPane tab='Subscriptions' key={profileRoutesName.SUBSCRIPTION}></Tabs.TabPane>
          <Tabs.TabPane tab='Subscribers' key={profileRoutesName.SUBSCRIBERS}></Tabs.TabPane>
        </Tabs>
      </Card>
    </div>
  );
};
