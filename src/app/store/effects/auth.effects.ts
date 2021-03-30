import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AUTH} from '../actions';
import {AuthService} from '../../services';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {IAction} from '../interfaces';
import {EMPTY, Observable, of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  public tryLogin$ = createEffect(() =>
    this._actions$
      .pipe(
        ofType(AUTH.LOGIN.FETCH),
        exhaustMap(({payload}: IAction): Observable<string> => {
          return this._client.login(payload)
            .pipe(
              map(() => AUTH.LOGIN.FILL.RESOLVE),
              catchError((): Observable<string> => of(AUTH.LOGIN.FILL.REJECT))
            );
        }),
        map((type: string): IAction => ({type})),
        catchError(() => EMPTY)
      )
  );

  public logout$ = createEffect(() =>
    this._actions$
      .pipe(
        ofType(AUTH.LOGOUT.FETCH),
        exhaustMap((): Observable<boolean> => this._client.logout()),
        map((): IAction => ({type: AUTH.LOGOUT.FILL})),
        tap(() => this._router.navigate(['/login'])),
        catchError(() => EMPTY)
      )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _client: AuthService,
    private readonly _router: Router
  ) {
  }
}
