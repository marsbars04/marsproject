import { Routes } from '@angular/router'
import { DashboardComponent } from '../pages/dashboard/dashboard.component'

export const MainRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
]
