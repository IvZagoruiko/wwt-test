import {createReducer, on} from '@ngrx/store';
import {initialState} from '../root-store.state';
import {fillErrorsAction, fillLogoutAction, fillRejectLoginAction, fillResolveLoginAction} from '../actions';
import {IAction} from '../interfaces';
import {IAuth} from '../../interfaces';

const fillResolveLogin = (state: IAuth): IAuth => {
  return {...state, authenticated: true};
};

const fillRejectLogin = (state: IAuth): IAuth => {
  return {...state, error: true};
};

const fillLogout = (state: IAuth): IAuth => {
  return {...state, authenticated: false};
};

const fillErrors = (state: IAuth): IAuth => {
  return {...state, error: false};
};

const authReducerBuilder = createReducer(
  initialState.auth,
  on(fillResolveLoginAction, fillResolveLogin),
  on(fillRejectLoginAction, fillRejectLogin),
  on(fillLogoutAction, fillLogout),
  on(fillErrorsAction, fillErrors)
);

export function authReducer(state: IAuth | undefined, action: IAction): IAuth {
  return authReducerBuilder(state, action);
}
