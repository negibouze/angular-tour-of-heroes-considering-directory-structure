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
    loadChildren: () => import('./contents/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./contents/heroes/heroes.module').then(m => m.HeroesModule)
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
    loadChildren: () => import('./contents/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
