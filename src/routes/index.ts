import EventWidget from '../pages/EventWidget';
import Login from '../pages/Login';

export enum RoutesNames {
  LOGIN = '/login',
  EVENT_WIDGET = '/',
  ANY = '*'
}

export interface IRoute {
  path: string,
  element: any,
  exact?: boolean,
};

export const publicRoutes: IRoute[] = [
  { path: RoutesNames.LOGIN, element: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RoutesNames.EVENT_WIDGET, element: EventWidget },
]; 