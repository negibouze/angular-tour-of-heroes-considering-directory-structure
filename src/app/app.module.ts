import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from '@app/modules/dashboard/pages/dashboard/dashboard.component';
import { HeroDetailComponent } from '@app/modules/hero-detail/pages/hero-detail/hero-detail.component';
import { HeroesComponent } from '@app/modules/heroes/pages/heroes/heroes.component';
import { MessagesComponent } from '@app/shared/components/messages/messages.component';
import { InMemoryDataService } from './core/services/in-memory-data.service';
import { HeroSearchComponent } from './shared/components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
