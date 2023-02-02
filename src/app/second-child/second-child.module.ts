import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondChildRoutingModule } from './second-child-routing.module';
import { SecondChildComponent } from './second-child.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';


@NgModule({
  declarations: [
    SecondChildComponent
  ],
  imports: [
    CommonModule,
    SecondChildRoutingModule, GridModule
  ]
})
export class SecondChildModule { }
