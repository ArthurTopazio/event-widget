import React, { FC } from 'react';

import { Header } from 'antd/lib/layout/layout';
import { Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutesNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { AuthActionCreators } from '../store/reducers/auth/actionCreators';

const NavBar: FC = () => {

  const router = useNavigate();
  const dispatch = useTypedDispatch();

  const { isAuth, user } = useTypedSelector(state => state.auth);

  return (
    <Header>
      <div className="logo" />
      <Row justify='end'>
        {isAuth
          ? <Menu theme="dark" mode="horizontal">
            <div style={{ color: 'white' }}>{user.username}</div>
            <Menu.Item
              onClick={() => dispatch(AuthActionCreators.logout())}
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
