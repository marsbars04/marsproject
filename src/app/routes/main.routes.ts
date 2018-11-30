import { Routes } from '@angular/router'
import { DashboardComponent } from '../pages/dashboard/dashboard.component'
import { AboutComponent } from '../pages/about/about.component'
import { DomainComponent } from '../pages/domain/domain.component';
import { HostingComponent } from '../pages/hosting/hosting.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { GetStartedComponent } from '../pages/get-started/get-started.component';

export const MainRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'domain',
        component: DomainComponent,
      },
      {
        path: 'hosting',
        component: HostingComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'get-started',
        component: GetStartedComponent,
      }
    ],
  },
]
