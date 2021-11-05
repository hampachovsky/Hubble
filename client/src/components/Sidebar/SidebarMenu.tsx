import React from 'react';
import {
  AntDesignOutlined,
  BarsOutlined,
  ClockCircleOutlined,
  ExperimentOutlined,
  FireOutlined,
  FundProjectionScreenOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import style from './Sidebar.module.less';
import { Input, Menu } from 'antd';

export const SidebarMenu: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <div className={style.searchWrap}>
        <Input.Search className={style.searchField} placeholder='test' />
      </div>
      <Menu
        className={style.sidebarMenu}
        mode='inline'
        defaultOpenKeys={['category']}
        style={{ height: '100%' }}
      >
        <Menu.Item icon={<FireOutlined />} key='1'>
          Popular
        </Menu.Item>
        <Menu.Item icon={<ClockCircleOutlined />} key='2'>
          Latest
        </Menu.Item>
        <Menu.SubMenu icon={<BarsOutlined />} key='category' title='Category'>
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
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};
