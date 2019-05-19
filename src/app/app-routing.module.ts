import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginLayoutComponent } from '@app/layouts/login-layout/login-layout.component';
import { ContentLayoutComponent } from '@app/layouts/content-layout/content-layout.component';

const ContentRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'heroes',
    loadChildren: './modules/heroes/heroes.module#HeroesModule'
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    // canActivate: [NoAuthGuard],
    children: ContentRoutes
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    loadChildren: './modules/login/login.module#LoginModule'
  },
  // Fallback when no prior routes is matched
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
