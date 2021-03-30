import {Component, Input} from '@angular/core';
import {IWork} from '../../../../interfaces';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  @Input()
  public data: IWork | undefined;
}
