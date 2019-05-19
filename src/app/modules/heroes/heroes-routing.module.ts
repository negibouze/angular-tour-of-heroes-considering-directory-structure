import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './pages/heroes/heroes.component';
import { EditComponent } from './pages/edit/edit.component';
import { DetailComponent } from './pages/detail/detail.component';

const Routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path: '',
    children: [
      {
        path: 'edit',
        component: EditComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
