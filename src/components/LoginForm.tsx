import { Button, Form, Input } from 'antd';
import React, { FC, useState } from 'react';

import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/actionCreators';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
  const dispatch = useTypedDispatch();
  const { error, isLoading } = useTypedSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    dispatch(AuthActionCreators.login(username, password));
  }

  return (
    <Form
      onFinish={submit}
    >
      {error && <h2 style={{ color: 'red' }} >{error}</h2>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please enter')]}
      >
        <Input value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type={'password'}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default LoginForm;
