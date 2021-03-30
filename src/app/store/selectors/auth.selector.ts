import {createSelector} from '@ngrx/store';
import {IRootState} from '../interfaces';
import {IAuth} from '../../interfaces';

const selectAuth = (state: IRootState): IAuth => state.auth;

export const selectAuthenticated = createSelector(
  selectAuth,
  (state: IAuth): boolean => state.authenticated
);

export const selectAuthError = createSelector(
  selectAuth,
  (state: IAuth): boolean => state.error
);
