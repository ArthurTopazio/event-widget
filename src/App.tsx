import AppRouter from './components/AppRouter';
import { useEffect } from 'react';

import { useActions } from './hooks/useActions';
import { IUser } from './models/IUsers';

import NavBar from './components/NavBar';
import { Layout } from 'antd';

import './App.css';


function App() {

  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true)
    }
  }, []);

  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
