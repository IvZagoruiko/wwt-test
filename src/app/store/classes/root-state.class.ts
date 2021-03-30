import {IRootState} from '../interfaces';
import {IAuth} from '../../interfaces';

export class RootState implements IRootState {
  auth: IAuth = {
    authenticated: false,
    error: false
  };
}
