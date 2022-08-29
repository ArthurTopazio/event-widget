import React, { FC } from 'react';

import { Header } from 'antd/lib/layout/layout';
import { Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const NavBar: FC = () => {

  const router = useNavigate();

  console.log(router);


  return (
    <Header>
      <div className="logo" />
      <Row justify='end'>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item onClick={() => { }} key={1}>Login</Menu.Item>
          <Menu.Item key={2}>Abou us</Menu.Item>
        </Menu>
      </Row>
    </Header>
  )
};

export default NavBar;
