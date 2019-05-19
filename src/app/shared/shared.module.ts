import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from '@app/core/services/in-memory-data.service';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeroSearchComponent,
    MessagesComponent,
    MenuListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HeroSearchComponent,
    MessagesComponent,
    MenuListComponent,
  ]
})
export class SharedModule { }
