import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {IRootState} from '../store/interfaces';
import {selectAuthenticated} from '../store/selectors';
import {map, takeUntil} from 'rxjs/operators';
import {QueryErrors} from '../enums';
import {CheckDestroyClass} from '../classes';

@Injectable({providedIn: 'root'})
export class HomePageGuard extends CheckDestroyClass implements CanActivate {
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
          return authenticated ? true : this._router.createUrlTree(
            ['/login'],
            {queryParams: {error: QueryErrors.errorAccess}}
          );
        }),
        takeUntil(this.destroy$)
      );
  }
}
