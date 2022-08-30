import { IUser } from './../../../models/IUsers';

export interface AuthState {
  isAuth: boolean
  user: IUser
  isLoading: boolean
  error: string
};

export enum AuthActionsEnum {
  SetAuth = 'SET_AUTH',
  SetUser = 'SET_USER',
  SetError = 'SET_ERROR',
  SetIsLoading = 'SET_IS_LOADING'
};

export interface SetAuthAction {
  type: AuthActionsEnum.SetAuth,
  payload: boolean,
};

export interface SetUserAction {
  type: AuthActionsEnum.SetUser,
  payload: IUser,
};

export interface SetErrorAction {
  type: AuthActionsEnum.SetError,
  payload: string,
};

export interface SetIsLoadingAction {
  type: AuthActionsEnum.SetIsLoading,
  payload: boolean,
};


export type AuthAction = SetAuthAction
  | SetErrorAction
  | SetUserAction
  | SetIsLoadingAction;