import {createReducer, on} from '@ngrx/store';
import {initialState} from '../root-store.state';
import {logoutAction, resultLoginAction} from '../actions';
import {Auth} from '../../enums';
import {IAction} from '../interfaces';

const resultLogin = (state: Auth, action: IAction): Auth => {
  return action.payload;
};

const logout = (state: Auth): Auth => {
  return Auth.logout;
};

const authReducerBuilder = createReducer(
  initialState.auth,
  on(resultLoginAction, resultLogin),
  on(logoutAction, logout)
);

export function authReducer(state: Auth | undefined, action: IAction): Auth {
  return authReducerBuilder(state, action);
}
