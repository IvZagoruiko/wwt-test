import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AUTH} from '../actions';
import {AuthService} from '../../services';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {IAction} from '../interfaces';
import {Auth} from '../../enums';
import {EMPTY, Observable} from 'rxjs';

// ToDo : Denis answer 4 Сервисы все в одной папке, без подпапок
@Injectable()
export class AuthEffects {
  public tryLogin$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AUTH.TRY_LOGIN),
      exhaustMap(({payload}: IAction): Observable<Auth> => this._client.login(payload)),
      map((auth: Auth): IAction => ({type: AUTH.RESULT_LOGIN, payload: auth})),
      catchError(() => EMPTY)
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _client: AuthService
  ) {
  }
}
