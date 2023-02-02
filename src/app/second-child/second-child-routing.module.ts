import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondChildComponent } from './second-child.component';

const routes: Routes = [{ path: '', component: SecondChildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondChildRoutingModule { }
