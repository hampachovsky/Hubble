import { Layout, Row, Menu, Col, Image, Avatar } from 'antd';
import logoUrl from 'assets/logo.png';
import style from './Navbar.module.less';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { routesName } from 'router/routes';

export const Navbar: React.FC = () => {
  const router = useHistory();

  return (
    <Layout.Header className={style.header}>
      <Row justify='center' className={style.row}>
        <Col className={style.logoWrap} span={6}>
          <Image className={style.logo} preview={false} src={logoUrl} />
        </Col>
        <Col className={style.menuRow} span={8} offset={8}>
          <Menu className={style.nav} theme='light' mode='horizontal' selectable={false}>
            <Menu.Item className={style.menuItem} key={1} onClick={() => router.push('/profile')}>
              <Avatar style={{ marginRight: 10 }} size={30}>
                U
              </Avatar>
              UserName
            </Menu.Item>
            <Menu.Item
              className={style.menuItem}
              key={2}
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
