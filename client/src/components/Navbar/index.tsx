import { BarsOutlined } from '@ant-design/icons';
import { Avatar, Col, Image, Layout, Menu, Row } from 'antd';
import logoUrl from 'assets/logo.svg';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { routesName } from 'router/routes';
import style from './Navbar.module.less';

export const Navbar: React.FC = () => {
  const router = useHistory();

  return (
    <Layout.Header className={style.header}>
      <Row justify='space-around' className={style.row}>
        <Col className={style.logoWrap} span={4}>
          <Image className={style.logo} preview={false} src={logoUrl} />
        </Col>
        <Col className={style.menuRow} span={16}>
          <Menu
            className={style.nav}
            theme='dark'
            mode='horizontal'
            selectable={false}
            overflowedIndicator={<BarsOutlined style={{ fontSize: '20px' }} />}
          >
            <Menu.Item className={style.menuItem} key={1} onClick={() => router.push('/articles')}>
              Aricles
            </Menu.Item>
            <Menu.Item className={style.menuItem} key={2} onClick={() => router.push('/profile')}>
              <Avatar
                style={{ marginRight: 10, backgroundColor: '#ffffff', color: '#000' }}
                size={30}
                shape='square'
              >
                U
              </Avatar>
              UserName
            </Menu.Item>
            <Menu.Item
              className={style.menuItem}
              key={3}
              onClick={() => router.push(routesName.LOGIN)}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Layout.Header>
  );
};
