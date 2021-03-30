import {Component, Input} from '@angular/core';
import {ISideBar} from '../../../../interfaces';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input()
  public data: ISideBar | undefined;

  public getTarget(ref: string): string {
    return ref.search(/tel: | mailto: /) === -1 ? '_blank' : '_self';
  }

  public getBackground(): { [key: string]: string } {
    return {backgroundImage: `url(${this.data?.photo})`};
  }
}
