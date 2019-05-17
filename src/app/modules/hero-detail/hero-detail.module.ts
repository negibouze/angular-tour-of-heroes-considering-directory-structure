import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared';

import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HeroDetailRoutingModule
  ]
})
export class HeroDetailModule { }
