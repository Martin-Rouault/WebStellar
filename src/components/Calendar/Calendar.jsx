import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { format, parseISO } from 'date-fns';

import EventList from './EventList/EventList';
import Filter from './Filter/Filter';
import { fetchEvents } from '../../actions/event';

import './Calendar.scss';

const Calendar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventList = useSelector((state) => state.event.eventList);
  const selectedDate = useSelector((state) => state.event.selectedDate);

  const filterEvents = () => {
    return eventList.filter((evt) => {
      const dateISO = parseISO(evt.date);
      const formatedDate = format(dateISO, 'yyyy-MM');
      return formatedDate === selectedDate;
    });
  };

  const filteredEvents = filterEvents();

  return (
    <>
      <Filter />
      <EventList events={selectedDate ? filteredEvents : eventList} />
    </>
  );
};

export default Calendar;
