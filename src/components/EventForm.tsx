import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { FC } from 'react';
import { rules } from '../utils/rules';

const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Event name"
        name="description"
        rules={[rules.required('Please enter')]}
      >
        <Input />
      </Form.Item>
      <FormItem
        label="Event date"
        name="date"
        rules={[rules.required('Please enter')]}
      >
        <DatePicker />
      </FormItem>
      <FormItem
        label="Guest"
        name="guest"
        rules={[rules.required('Please choose')]}
      >
        <Select defaultValue={'Bob'}>
          <Select.Option value={'Bob'}>Bob</Select.Option>
          <Select.Option value={'Veronica'}>Veronica</Select.Option>
          <Select.Option value={'Hanna'}>Hanna</Select.Option>
          <Select.Option value={'Troy'}>Troy</Select.Option>
        </Select>
      </FormItem>
      <Row justify='end'>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
          >
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
};

export default EventForm;
