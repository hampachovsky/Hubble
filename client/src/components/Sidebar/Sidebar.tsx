import { Layout } from 'antd';
import { useWindowResize } from 'hooks/useWindowSize';
import React, { useState } from 'react';
import { AdaptiveSidebar } from './AdaptiveSidebar';
import { SidebarMenu } from './SidebarMenu';

const { Sider } = Layout;

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const size = useWindowResize();

  return size.width >= 1104 ? (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={220}
      style={{
        position: 'fixed',
        left: 0,
        overflow: 'auto',
        minHeight: '100vh',
      }}
    >
      <SidebarMenu />
    </Sider>
  ) : (
    <AdaptiveSidebar />
  );
};
