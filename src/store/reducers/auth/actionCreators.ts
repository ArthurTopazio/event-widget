import { AppDispatch } from './../../index';
import { IUser } from '../../../models/IUsers';
import { AuthActionsEnum, SetErrorAction, SetUserAction, SetIsLoadingAction, SetAuthAction } from './types';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionsEnum.SetUser, payload: user }),
  setError: (error: string): SetErrorAction => ({ type: AuthActionsEnum.SetError, payload: error }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SetIsLoading, payload: isLoading }),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SetAuth, payload: isAuth }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {

    } catch (e) {

    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {

    } catch (e) {

    }
  }
};