import {
  AntDesignOutlined,
  BarsOutlined,
  ClockCircleOutlined,
  ExperimentOutlined,
  FireOutlined,
  FundProjectionScreenOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { Input, Layout, Menu, Space } from 'antd';
import React, { useState } from 'react';
import style from './Sidebar.module.less';
const { Sider } = Layout;
const { SubMenu } = Menu;

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      breakpoint='lg'
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      onBreakpoint={setCollapsed}
      width={210}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Space direction='vertical'>
        <div className={style.searchWrap}>
          <Input.Search placeholder='test' />
        </div>
        <Menu className={style.sidebarMenu} mode='inline' defaultOpenKeys={['category']}>
          <Menu.Item icon={<FireOutlined />} key='1'>
            Popular
          </Menu.Item>
          <Menu.Item icon={<ClockCircleOutlined />} key='2'>
            Latest
          </Menu.Item>
          <SubMenu icon={<BarsOutlined />} key='category' title='Category'>
            <Menu.Item icon={<ExperimentOutlined />} key='3'>
              Personal experience
            </Menu.Item>
            <Menu.Item icon={<AntDesignOutlined />} key='4'>
              Design
            </Menu.Item>
            <Menu.Item icon={<GithubOutlined />} key='5'>
              Programming
            </Menu.Item>
            <Menu.Item icon={<FundProjectionScreenOutlined />} key='6'>
              Career
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Space>
    </Sider>
  );
};
