import {IWork} from './work.interface';
import {IInstitution} from './institution.interface';
import {ICourse} from './cource.interface';
import {ISideBar} from './side-bar.interface';

export interface ISummary {
  name: string;
  position: string;
  aboutMe: string;
  sideBar: ISideBar;
  experience: Array<IWork>;
  education: Array<IInstitution>;
  courses: Array<ICourse>;
}
