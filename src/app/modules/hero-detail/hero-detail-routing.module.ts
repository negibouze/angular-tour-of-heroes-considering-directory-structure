import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';

const Routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class HeroDetailRoutingModule { }
