import { Layout } from 'antd';
import { Navbar } from 'components/Navbar';
import { PrivateAppRouter } from 'components/PrivateAppRouter';
import { PublicAppRouter } from 'components/PublicAppRouter';
import { Sidebar } from 'components/Sidebar/Sidebar';

import React from 'react';
import './App.less';
const { Content } = Layout;

function App() {
  const isAuth = true;
  return (
    <Layout>
      {isAuth ? (
        <>
          <Navbar />
          <Layout style={{ marginTop: 64 }}>
            <Sidebar />
            <Layout style={{ padding: '24px' }}>
              <Content>
                <PublicAppRouter />
              </Content>
            </Layout>
          </Layout>
        </>
      ) : (
        <PrivateAppRouter />
      )}
    </Layout>
  );
}

export default App;
