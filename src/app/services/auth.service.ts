import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAuthData} from '../interfaces';
import {USERS} from '../mocks';
import {Observable, of, throwError, timer} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly _client: HttpClient,
    private readonly _router: Router
  ) {
  }

  // In real project
  // public login(authData: IAuthData): Observable<any> {
  //   return this._client.post<any>('url', authData);
  // }

  public login(authData: IAuthData): Observable<boolean> {
    const user = USERS.find(({email}: IAuthData) => authData.email === email);

    return timer(1000)
      .pipe(
        mergeMap((): Observable<boolean> => {
          return user?.password === authData.password ? of(true) : throwError(true);
        })
      );
  }

  public logout(): Observable<boolean> {
    return of(false);
  }
}
