import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../../../services';
import {select, Store} from '@ngrx/store';
import {IRootState} from '../../../../store/interfaces';
import {fetchLoginAction, fillErrorsAction} from '../../../../store/actions';
import {Router} from '@angular/router';
import {selectAuthenticated, selectAuthError} from '../../../../store/selectors';
import {CheckDestroyClass} from '../../../../classes';
import {skip, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends CheckDestroyClass {
  public submitted = false;
  public error = false;
  public form: FormGroup;
  public email: FormControl;
  public password: FormControl;

  constructor(
    private readonly _dialogRef: MatDialogRef<LoginFormComponent>,
    private readonly _client: AuthService,
    private readonly _store: Store<IRootState>,
    private readonly _router: Router
  ) {
    super();
    this.email = new FormControl(
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur'
      }
    );
    this.password = new FormControl(
      '',
      [Validators.required, Validators.minLength(4)]
    );
    this.form = new FormGroup({
      email: this.email,
      password: this.password
    });

    this._store
      .pipe(
        select(selectAuthenticated),
        takeUntil(this.destroy$)
      )
      .subscribe((authenticated: boolean) => {
        if (authenticated) {
          this._router.navigate(['/home']);
          this._dialogRef.close();
        }
      });

    this._store
      .pipe(
        select(selectAuthError),
        skip(1),
        takeUntil(this.destroy$)
      )
      .subscribe((error: boolean) => {
        this.error = error;
        this.submitted = false;
      });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.error && this._store.dispatch(fillErrorsAction()));
  }

  public login(): void {
    if (this.form.valid) {
      this._store.dispatch(fetchLoginAction({payload: this.form.value}));
      this.submitted = true;
    }
  }

  public disableSubmitButton(): boolean {
    return this.form.invalid || this.error || this.submitted;
  }
}
