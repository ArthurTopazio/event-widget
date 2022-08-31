import { Button, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const EventWidget: FC = () => {

  const { fetchGuests } = useActions();
  const guests = useTypedSelector(state => state.event.guests);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    fetchGuests()
  }, []);


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
        <EventForm guests={guests} />
      </Modal>
    </div>
  )
};

export default EventWidget;
