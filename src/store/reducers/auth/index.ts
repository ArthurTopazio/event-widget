import { IUser } from "../../../models/IUsers";
import { AuthAction, AuthActionsEnum, AuthState } from "./types";

const initialState: AuthState = {
  isAuth: false,
  error: '',
  isLoading: false,
  user: {} as IUser
};

export default function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SetAuth:
      return { ...state, isAuth: action.payload }
    case AuthActionsEnum.SetIsLoading:
      return { ...state, isLoading: true }
    case AuthActionsEnum.SetError:
      return { ...state, isLoading: false, error: action.payload }
    case AuthActionsEnum.SetUser:
      return { ...state, isLoading: false, user: action.payload }
    default:
      return state
  }
};