import React, { FC } from 'react';

import { Header } from 'antd/lib/layout/layout';
import { Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutesNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

const NavBar: FC = () => {

  const router = useNavigate();

  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <Header>
      <div className="logo" />
      <Row justify='end'>
        {isAuth
          ? <Menu theme="dark" mode="horizontal">
            <div style={{ color: 'white' }}>Arthur</div>
            <Menu.Item
              onClick={() => console.log('OUT')}
              key={1}
            >
              Logout
            </Menu.Item>
          </Menu>
          : <Menu theme="dark" mode="horizontal">
            <Menu.Item
              onClick={() => router(RoutesNames.LOGIN)}
              key={1}
            >
              Login
            </Menu.Item>
          </Menu>
        }
      </Row>
    </Header>
  )
};

export default NavBar;
