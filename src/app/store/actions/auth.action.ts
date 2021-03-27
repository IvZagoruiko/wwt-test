import {createAction, props} from '@ngrx/store';
import {Auth} from '../../enums';
import {IAuthData} from '../../interfaces';

const actionGroupName = 'Auth';

export const AUTH = {
  TRY_LOGIN: `[${actionGroupName} Try login]`,
  RESULT_LOGIN: `[${actionGroupName}] Result login`,
  LOGOUT: `[${actionGroupName}] Logout`
};

export const tryLoginAction = createAction(
  AUTH.TRY_LOGIN,
  // ToDo : обернуть ли все в payload
  props<{ payload: IAuthData }>()
);

export const resultLoginAction = createAction(
  AUTH.RESULT_LOGIN,
  props<{ payload: Auth }>()
);

export const logoutAction = createAction(
  AUTH.LOGOUT
);
