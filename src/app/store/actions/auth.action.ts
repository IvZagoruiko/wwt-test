import {createAction, props} from '@ngrx/store';
import {IAuthData} from '../../interfaces';

const actionGroupName = 'Auth';

export const AUTH = {
  LOGIN: {
    FETCH: `[${actionGroupName}] Fetch login`,
    FILL: {
      RESOLVE: `[${actionGroupName}] Fill resolve login`,
      REJECT: `[${actionGroupName}] Fill reject login`
    }
  },
  LOGOUT: {
    FETCH: `[${actionGroupName}] Fetch logout`,
    FILL: `[${actionGroupName}] Fill logout`
  },
  ERRORS: {
    FILL: `[${actionGroupName}] Fill errors`
  }
};

export const fetchLoginAction = createAction(
  AUTH.LOGIN.FETCH,
  props<{ payload: IAuthData }>()
);

export const fillResolveLoginAction = createAction(
  AUTH.LOGIN.FILL.RESOLVE
);

export const fillRejectLoginAction = createAction(
  AUTH.LOGIN.FILL.REJECT
);

export const fetchLogoutAction = createAction(
  AUTH.LOGOUT.FETCH
);

export const fillLogoutAction = createAction(
  AUTH.LOGOUT.FILL
);

export const fillErrorsAction = createAction(
  AUTH.ERRORS.FILL
);
