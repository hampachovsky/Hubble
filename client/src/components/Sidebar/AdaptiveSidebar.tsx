import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import style from './Sidebar.module.less';
import { SidebarMenu } from './SidebarMenu';

export const AdaptiveSidebar: React.FC = () => {
  const [isVisible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <div className={style.adaptiveBtnWrapper}>
        <Button onClick={toggleSidebar} icon={<MenuOutlined />} />
      </div>
      <Drawer
        title='Menu'
        placement='left'
        closable={false}
        onClose={toggleSidebar}
        visible={isVisible}
        key='left'
        contentWrapperStyle={{
          overflow: 'auto',
          minHeight: '100vh',
          width: '300px',
        }}
        bodyStyle={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <SidebarMenu />
      </Drawer>
    </>
  );
};
