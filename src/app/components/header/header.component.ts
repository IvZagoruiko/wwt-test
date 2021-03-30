import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IRootState} from '../../store/interfaces';
import {selectAuthenticated} from '../../store/selectors';
import {AuthService} from '../../services';
import {Router} from '@angular/router';
import {fetchLogoutAction} from '../../store/actions';
import {CheckDestroyClass} from '../../classes';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends CheckDestroyClass {
  public authed = false;

  constructor(
    private readonly _store: Store<IRootState>,
    private readonly _client: AuthService,
    private readonly _router: Router
  ) {
    super();
    this._store
      .pipe(
        select(selectAuthenticated),
        takeUntil(this.destroy$)
      )
      .subscribe((authenticated: boolean) => this.authed = authenticated);
  }

  public get title(): string {
    return this.authed ? 'Home Page' : 'Login Page';
  }

  public logout(): void {
    this._store.dispatch(fetchLogoutAction());
  }
}
