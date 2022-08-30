import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {

  const submit = () => {
    console.log('submit');

  }

  return (
    <Form
      onFinish={submit}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please enter')]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default LoginForm;
