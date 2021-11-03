import { Col, Layout, Row } from 'antd';
import { Navbar } from 'components/Navbar';
import { PrivateAppRouter } from 'components/PrivateAppRouter';
import { PublicAppRouter } from 'components/PublicAppRouter';
import { Sidebar } from 'components/Sidebar';
import React from 'react';
import './App.less';

function App() {
  const isAuth = true;
  return (
    <Layout>
      {isAuth ? (
        <>
          <Navbar />
          <Row>
            <Layout>
              <Col span={4}>
                <Sidebar />
              </Col>
              <Col span={20}>
                <Layout.Content>
                  <PublicAppRouter />
                </Layout.Content>
              </Col>
            </Layout>
          </Row>
        </>
      ) : (
        <PrivateAppRouter />
      )}
    </Layout>
  );
}

export default App;
