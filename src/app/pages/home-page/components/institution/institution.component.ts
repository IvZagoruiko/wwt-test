import {Component, Input} from '@angular/core';
import {IInstitution} from '../../../../interfaces';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent {
  @Input()
  public data: IInstitution | undefined;
}
