import {createSelector} from '@ngrx/store';
import {IRootState} from '../interfaces';
import {Auth} from '../../enums';

// ToDo : Denis answer 1
const selectState = (state: IRootState): IRootState => state;

export const selectAuth = createSelector(
  selectState,
  (state: IRootState): Auth => state.auth
);
