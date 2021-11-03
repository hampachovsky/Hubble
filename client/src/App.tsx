import { Input, Layout } from 'antd';
import Navbar from 'components/Navbar';
import React from 'react';
import './App.less';

function App() {
  return (
    <Layout>
      <Navbar />
      <Input.Search style={{ width: 200 }} value='TEST' />
    </Layout>
  );
}

export default App;
