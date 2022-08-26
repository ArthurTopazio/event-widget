import EventWidget from "../pages/EventWidget";
import Login from "../pages/Login";

export enum RoutesNames {
  LOGIN = '/login',
  EVENT_WIDGET = '/'
}

export interface IRoute {
  path: string,
  element: React.ComponentType,
  exact?: boolean,
};

export const publicRoutes: IRoute[] = [
  { path: RoutesNames.LOGIN, element: Login, exact: true }
];

export const privateRoutes: IRoute[] = [
  { path: RoutesNames.EVENT_WIDGET, element: EventWidget, exact: true }
]; 