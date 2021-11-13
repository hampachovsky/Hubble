import { Layout } from 'antd';
import { Navbar } from 'components/Navbar';
import { PrivateAppRouter } from 'components/PrivateAppRouter';
import { PublicAppRouter } from 'components/PublicAppRouter';
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
          <Layout style={{ marginTop: 64, minHeight: '100vh' }}>
            <Layout style={{ padding: '24px' }}>
              <Content style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
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
