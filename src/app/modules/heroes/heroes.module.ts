import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { EditComponent } from './pages/edit/edit.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    HeroesComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
