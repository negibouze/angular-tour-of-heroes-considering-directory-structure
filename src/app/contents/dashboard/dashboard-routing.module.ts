import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const Routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  // },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent
  //     }
  //   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
