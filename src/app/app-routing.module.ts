import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'firstChild', loadChildren: () => import('./first-child/first-child.module').then(m => m.FirstChildModule) }, { path: 'secondChild', loadChildren: () => import('./second-child/second-child.module').then(m => m.SecondChildModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
