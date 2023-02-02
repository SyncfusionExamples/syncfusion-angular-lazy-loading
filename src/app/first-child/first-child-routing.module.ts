import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponent } from './first-child.component';

const routes: Routes = [{ path: '', component: FirstChildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstChildRoutingModule { }
