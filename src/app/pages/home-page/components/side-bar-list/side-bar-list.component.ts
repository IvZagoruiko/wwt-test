import {Component, Input} from '@angular/core';
import {ISideBarList} from '../../../../interfaces';

@Component({
  selector: 'app-side-bar-list',
  templateUrl: './side-bar-list.component.html',
  styleUrls: ['./side-bar-list.component.scss']
})
export class SideBarListComponent {
  @Input()
  public data: ISideBarList | undefined;
}
