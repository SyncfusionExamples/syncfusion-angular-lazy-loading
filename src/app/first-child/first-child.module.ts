import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstChildRoutingModule } from './first-child-routing.module';
import { FirstChildComponent } from './first-child.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [
    FirstChildComponent
  ],
  imports: [
    CommonModule,
    FirstChildRoutingModule, CalendarModule
  ]
})
export class FirstChildModule { }
