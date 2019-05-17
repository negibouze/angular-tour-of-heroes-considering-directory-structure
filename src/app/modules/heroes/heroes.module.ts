import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
