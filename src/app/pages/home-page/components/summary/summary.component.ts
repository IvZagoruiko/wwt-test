import {Component} from '@angular/core';
import {ISummary} from '../../../../interfaces';
import {SUMMARY} from '../../../../mocks';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  data: ISummary = SUMMARY;
}
