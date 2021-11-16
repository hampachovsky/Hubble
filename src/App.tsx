import { Layout } from 'antd';
import { Preloader } from 'components/common/Preloader';
import { Navbar } from 'components/Navbar';
import { PrivateAppRouter } from 'components/PrivateAppRouter';
import { PublicAppRouter } from 'components/PublicAppRouter';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from 'store/reducers/user/actionCreators';
import './App.less';
const { Content } = Layout;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  const isLoading = useAppSelector((state) => state.userReducer.isLoading);

  return isLoading ? (
    <Preloader />
  ) : (
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
