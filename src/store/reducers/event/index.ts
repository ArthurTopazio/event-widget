import { EventState, EventAction, EventsActionEnum } from './type';


const initialState: EventState = {
  guests: [],
  events: []
};

export default function eventReducer(state = initialState, action: EventAction): EventState {
  switch (action.type) {
    case EventsActionEnum.SetEvents:
      return { ...state, events: action.payload }
    case EventsActionEnum.SetGuests:
      return { ...state, guests: action.payload }
    default:
      return state
  }
};