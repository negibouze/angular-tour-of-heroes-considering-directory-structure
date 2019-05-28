import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

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
