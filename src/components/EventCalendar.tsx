import { Calendar } from 'antd';
import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';

interface EventCalendarTPD {
  event: IEvent[]
}

const EventCalendar: FC<EventCalendarTPD> = () => {

  return (
    <div>
      <Calendar />
    </div>
  )
};

export default EventCalendar;
