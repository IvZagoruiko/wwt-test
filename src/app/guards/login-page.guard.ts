import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {IRootState} from '../store/interfaces';
import {map, takeUntil} from 'rxjs/operators';
import {selectAuthenticated} from '../store/selectors';
import {CheckDestroyClass} from '../classes';

@Injectable({providedIn: 'root'})
export class LoginPageGuard extends CheckDestroyClass implements CanActivate {
  constructor(
    private readonly _store: Store<IRootState>,
    private readonly _router: Router
  ) {
    super();
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this._store
      .pipe(
        select(selectAuthenticated),
        map((authenticated: boolean): boolean | UrlTree => {
          return authenticated ? this._router.createUrlTree(['/home']) : true;
        }),
        takeUntil(this.destroy$)
      );
  }
}
