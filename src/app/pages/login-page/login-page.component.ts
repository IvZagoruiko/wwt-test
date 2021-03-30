import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginFormComponent} from './components';
import {ActivatedRoute, Params} from '@angular/router';
import {QueryErrors} from '../../enums';
import {Store} from '@ngrx/store';
import {IRootState} from '../../store/interfaces';
import {fillErrorsAction} from '../../store/actions';
import {takeUntil} from 'rxjs/operators';
import {CheckDestroyClass} from '../../classes';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent extends CheckDestroyClass {
  public showHint = false;

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<IRootState>
  ) {
    super();
    this._route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        this.showHint = params.error === QueryErrors.errorAccess;
      });
  }

  public showLoginForm(): void {
    const loginForm = this._dialog.open(LoginFormComponent, {width: '300px'});

    loginForm.afterClosed()
      .subscribe(() => {
        this._store.dispatch(fillErrorsAction());
      });
  }
}
