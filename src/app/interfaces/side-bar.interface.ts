import {ILink} from './link.interface';
import {ISideBarList} from './side-bar-list.interface';

export interface ISideBar {
  photo: string;
  contacts: Array<ILink>;
  lists: Array<ISideBarList>;
}
