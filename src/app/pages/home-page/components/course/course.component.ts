import {Component, Input} from '@angular/core';
import {ICourse} from '../../../../interfaces';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input()
  public data: ICourse | undefined;
}
