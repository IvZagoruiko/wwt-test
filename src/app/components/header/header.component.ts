import {Component} from '@angular/core';
import {Auth} from '../../enums';
import {select, Store} from '@ngrx/store';
import {IRootState} from '../../store/interfaces';
import {selectAuth} from '../../store/selectors';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public authed = false;

  constructor(private readonly _store: Store<IRootState>) {
    this._store.pipe(
      select(selectAuth),
      tap((auth: Auth) => {
        this.authed = auth === Auth.successfulLogin;
      })
    );
  }
}
