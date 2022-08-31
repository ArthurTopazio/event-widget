import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUsers";

export interface EventState {
  guests: IUser[]
  events: IEvent[]
};

export enum EventsActionEnum {
  SetGuests = 'SET_GUESTS',
  SetEvents = 'SET_EVENTS'
};

export interface SetGuestAction {
  type: EventsActionEnum.SetGuests
  payload: IUser[]
};

export interface SetEventsAction {
  type: EventsActionEnum.SetEvents
  payload: IEvent[]
};

export type EventAction = SetGuestAction | SetEventsAction;
