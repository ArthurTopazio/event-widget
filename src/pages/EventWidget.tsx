import { Button, Modal, Row } from 'antd';
import { FC, useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const EventWidget: FC = () => {

  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const guests = useTypedSelector(state => state.event.guests);
  const events = useTypedSelector(state => state.event.events);
  const user = useTypedSelector(state => state.auth.user);


  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (e: IEvent) => {
    setIsVisible(false);
    createEvent(e)
  };

  return (
    <div>
      <Row justify='center'>
        <Button
          onClick={() => setIsVisible(true)}
        >
          Add event
        </Button>
      </Row>
      <EventCalendar event={events} />
      <Modal
        title={'Add event'}
        visible={isVisible}
        footer={null}
        onCancel={() => setIsVisible(false)}
      >
        <EventForm
          guests={guests}
          submit={addNewEvent}
        />
      </Modal>
    </div>
  )
};

export default EventWidget;
