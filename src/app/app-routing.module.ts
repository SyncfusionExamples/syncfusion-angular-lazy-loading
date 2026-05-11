import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'firstChild', loadComponent: () => import('./first-child/first-child.component').then(m => m.FirstChildComponent) },
  { path: 'secondChild', loadComponent: () => import('./second-child/second-child.component').then(m => m.SecondChildComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
