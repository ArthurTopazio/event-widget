import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from 'antd/lib/layout/layout';
import { Menu, Row } from 'antd';

import { RoutesNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const NavBar: FC = () => {

  const router = useNavigate();
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector(state => state.auth);

  return (
    <Header>
      <Row justify='end'>
        {isAuth
          ? <Menu theme="dark" mode="horizontal">
            <div style={{ color: 'white' }}>{user.username}</div>
            <Menu.Item
              onClick={logout}
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
