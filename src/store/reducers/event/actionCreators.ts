import { AppDispatch } from './../../index';
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUsers";
import { EventAction, EventsActionEnum } from "./type";
import UserService from '../../../api/UserService';


export const EventsActionCreators = {
  setGusts: (payload: IUser[]): EventAction => ({ type: EventsActionEnum.SetGuests, payload }),
  setEvents: (payload: IEvent[]): EventAction => ({ type: EventsActionEnum.SetEvents, payload }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const guests = await UserService.getUser();
      dispatch(EventsActionCreators.setGusts(guests.data))
    } catch (e) {
      console.log(e);
    }
  },
  fetchEvents: (userName: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(event => event.author === userName || event.guest === userName);
      dispatch(EventsActionCreators.setEvents(currentUserEvents));
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventsActionCreators.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (e) {
      console.log(e);
    }
  }
};