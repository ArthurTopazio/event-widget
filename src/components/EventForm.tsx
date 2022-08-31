import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { Moment } from 'moment';
import { FC, useState } from 'react';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUsers';
import { rules } from '../utils/rules';

interface EventFormTPD {
  guests: IUser[]
};

const EventForm: FC<EventFormTPD> = ({ guests }) => {

  const [event, setEvent] = useState<IEvent>({
    author: '',
    guest: '',
    date: '',
    description: ''
  });

  const selectDate = (date: Moment | null) => {
    console.log(date);
  }

  return (
    <Form>
      <Form.Item
        label="Event name"
        name="description"
        rules={[rules.required('Please enter')]}
      >
        <Input
          onChange={e => setEvent({ ...event, description: e.target.value })}
          value={event.description}
        />
      </Form.Item>
      <FormItem
        label="Event date"
        name="date"
        rules={[rules.required('Please enter')]}
      >
        <DatePicker
          onChange={(date) => selectDate(date)}
        />
      </FormItem>
      <FormItem
        label="Guest"
        name="guest"
        rules={[rules.required('Please choose')]}
      >
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {guests.map(name =>
            <Select.Option
              key={name.username}
              value={name.username}>
              {name.username}
            </Select.Option>)}
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
