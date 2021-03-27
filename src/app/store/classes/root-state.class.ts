import {IRootState} from '../interfaces';
import {Auth} from '../../enums';

export class RootState implements IRootState {
  auth = Auth.logout;
}
