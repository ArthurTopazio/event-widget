import { AuthActionCreators } from './auth/actionCreators';
import { EventsActionCreators } from './event/actionCreators';

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventsActionCreators
};