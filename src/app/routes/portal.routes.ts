import { Routes } from '@angular/router'
import { LoginComponent } from '../pages/login/login.component'

export const PortalRoutes: Routes = [
  {
    path: 'portal',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
]
