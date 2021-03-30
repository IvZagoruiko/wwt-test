import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {HomePageRoutingModule} from './home-page-routin.module';
import {
  CourseComponent,
  InstitutionComponent,
  SideBarComponent,
  SideBarListComponent,
  SummaryComponent,
  WorkComponent
} from './components';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HomePageComponent,
    SummaryComponent,
    SideBarComponent,
    SideBarListComponent,
    WorkComponent,
    InstitutionComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule {
}
