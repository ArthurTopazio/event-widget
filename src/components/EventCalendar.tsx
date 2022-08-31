import { Badge, BadgeProps, Calendar } from 'antd';
import { Moment } from 'moment';
import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';

interface EventCalendarTPD {
  event: IEvent[]
}

const EventCalendar: FC<EventCalendarTPD> = (props) => {

  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.event.filter(event => event.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((event, index) =>
          <div key={index}>{event.description}</div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Calendar
        dateCellRender={dateCellRender}
      />
    </div>
  )
};

export default EventCalendar;
