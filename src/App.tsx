import AppRouter from './components/AppRouter';

import NavBar from './components/NavBar';
import { Layout } from 'antd';

import './App.css';

function App() {
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
