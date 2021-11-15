import { MenuOutlined } from '@ant-design/icons';
import { Avatar, Col, Image, Layout, Menu, Row } from 'antd';
import logoUrl from 'assets/logo.svg';
import LogoutSvg from 'assets/logout.svg';
import SearchSvg from 'assets/search.svg';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { routesName } from 'router/routes';
import { signOut } from 'store/reducers/user/actionCreators';
import style from './Navbar.module.less';

export const Navbar: React.FC = () => {
  const router = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = (): any => {
    dispatch(signOut());
    window.localStorage.removeItem('token');
    router.push(routesName.LOGIN);
  };

  return (
    <Layout.Header className={style.header}>
      <Row justify='space-around' className={style.row}>
        <Col span={5}>
          <Link to='/' className={style.logoWrap}>
            <Image
              onClick={() => router.push('/')}
              className={style.logo}
              preview={false}
              src={logoUrl}
            />
          </Link>
        </Col>
        <Col className={style.menuRow} span={16}>
          <Menu
            className={style.nav}
            theme='dark'
            mode='horizontal'
            selectable={false}
            overflowedIndicator={<MenuOutlined style={{ fontSize: '20px' }} />}
          >
            <Menu.Item className={style.menuItem} key={1}>
              <img src={SearchSvg} className={style.icon} alt='search' />
            </Menu.Item>
            <Menu.Item
              className={style.menuItem}
              key={2}
              onClick={() => router.push(routesName.PROFILE)}
            >
              <Avatar
                style={{ backgroundColor: '#ffffff', color: '#000' }}
                size={30}
                shape='circle'
              >
                U
              </Avatar>
            </Menu.Item>
            <Menu.Item className={style.menuItem} key={3} onClick={handleSignOut}>
              <img src={LogoutSvg} className={style.icon} alt='search' />
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Layout.Header>
  );
};
