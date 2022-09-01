import { AppDispatch } from './../../index';
import { IUser } from '../../../models/IUsers';
import { AuthActionsEnum, SetErrorAction, SetUserAction, SetIsLoadingAction, SetAuthAction } from './types';
import UserService from '../../../api/UserService';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionsEnum.SetUser, payload: user }),
  setError: (error: string): SetErrorAction => ({ type: AuthActionsEnum.SetError, payload: error }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SetIsLoading, payload: isLoading }),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SetAuth, payload: isAuth }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      setTimeout(async () => {

        const response = await UserService.getUser();
        const mockUsers = response.data.find(user => user.username === username && user.password === password)

        if (mockUsers) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUsers.username);
          dispatch(AuthActionCreators.setUser(mockUsers));
          dispatch(AuthActionCreators.setIsAuth(true));
        } else {
          dispatch(AuthActionCreators.setError('Incorrect name or password'));
        }
      }, 1000)

    } catch (e: any) {
      dispatch(AuthActionCreators.setError(e));
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  }
};