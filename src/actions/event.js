export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SAVE_EVENTS = 'SAVE_EVENTS';
export const SAVE_DATE = 'SAVE_DATE';

export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

export const saveEvents = (events) => ({
  type: SAVE_EVENTS,
  events,
});

export const saveDate = (selectedDate) => ({
  type: SAVE_DATE,
  selectedDate,
});
