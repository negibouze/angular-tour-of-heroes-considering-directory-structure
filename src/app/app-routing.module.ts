import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from '@app/layouts/auth-layout/auth-layout.component';
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
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    children: ContentRoutes
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: './contents/auth/auth.module#AuthModule'
  },
  // Fallback when no prior routes is matched
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
