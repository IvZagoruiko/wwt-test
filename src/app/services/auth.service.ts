import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAuthData} from '../interfaces';
import {Users} from '../mocks';
import {Auth} from '../enums';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly _client: HttpClient) {
  }

  // In real project
  // public login(authData: IAuthData): Observable<Auth> {
  //   return this._client.post<Auth>('url', authData);
  // }

  public login(authData: IAuthData): Observable<Auth> {
    const user = Users.find(({email}: IAuthData) => authData.email === email);
    if (user) {
      return user.password === authData.password ? of(Auth.successfulLogin) : of(Auth.unsuccessfulLogin);
      // return user.password === authData.password ? Auth.successfulLogin : Auth.unsuccessfulLogin;
    }
    return of(Auth.unsuccessfulLogin);
    // return Auth.unsuccessfulLogin;
  }
}
