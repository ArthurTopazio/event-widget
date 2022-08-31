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
  }
};