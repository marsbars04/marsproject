import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutPortalComponent } from './layout/portal/layout.portal.component'
import { LoginComponent } from './pages/login/login.component'
import { LayoutMainComponent } from './layout/main/layout.main.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'

const routes: Routes = []

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutPortalComponent,
    children: [{ path: '', loadChildren: './modules/portal.module#PortalModule' }],
  },
  {
    path: '',
    component: LayoutMainComponent,
    children: [{ path: '', loadChildren: './modules/main.module#MainModule' }],
  },
]
