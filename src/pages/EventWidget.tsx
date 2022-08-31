import { Button, Modal, Row } from 'antd';
import React, { FC, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';

const EventWidget: FC = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Row justify='center'>
        <Button
          onClick={() => setIsVisible(true)}
        >
          Add event
        </Button>
      </Row>
      <EventCalendar event={[]} />
      <Modal
        title={'Add event'}
        visible={isVisible}
        footer={null}
        onCancel={() => setIsVisible(false)}
      >
        <EventForm />
      </Modal>
    </div>
  )
};

export default EventWidget;
