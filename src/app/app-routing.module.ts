import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginLayoutComponent } from '@app/layouts/login-layout/login-layout.component';
import { ContentLayoutComponent } from '@app/layouts/content-layout/content-layout.component';
import { PageNotFoundComponent } from './contents/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const ContentRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './contents/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'heroes',
    loadChildren: './contents/heroes/heroes.module#HeroesModule'
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
    canActivate: [AuthGuard],
    children: ContentRoutes
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    loadChildren: './contents/login/login.module#LoginModule'
  },
  // Fallback when no prior routes is matched
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
