import { Layout, Row, Menu, Col, Image, Input, Avatar } from 'antd';
import logoUrl from 'assets/logo.png';
import style from './Navbar.module.less';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
  const router = useHistory();
  return (
    <Layout.Header className={style.header}>
      <Row className={style.row}>
        <Col
          className={style.logoWrap}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          sm={{ span: 8 }}
          xs={{ span: 8 }}
        >
          <Image className={style.logo} preview={false} src={logoUrl} />
        </Col>

        <Col
          className={style.menuRow}
          md={{ span: 8, offset: 8 }}
          lg={{ span: 8, offset: 8 }}
          sm={{ span: 8, offset: 8 }}
          xs={{ span: 8, offset: 8 }}
        >
          <Menu className={style.nav} theme='light' mode='horizontal'>
            <Menu.Item key={1} onClick={() => router.push('/login')}>
              <Avatar style={{ marginRight: 10 }} size={40}>
                U
              </Avatar>
              Login
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Layout.Header>
  );
}
