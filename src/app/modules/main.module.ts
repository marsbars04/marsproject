import { NgModule } from '@angular/core'
import { GlobalModule } from './global.module'
import { DashboardComponent } from '../pages/dashboard/dashboard.component'
import { RouterModule } from '@angular/router'
import { MainRoutes } from '../routes/main.routes'
import { AboutComponent } from '../pages/about/about.component'
import { DomainComponent } from '../pages/domain/domain.component'
import { HostingComponent } from '../pages/hosting/hosting.component'
import { BlogComponent } from '../pages/blog/blog.component'
import { ContactComponent } from '../pages/contact/contact.component'
import { GetStartedComponent } from '../pages/get-started/get-started.component'

@NgModule({
  imports: [GlobalModule, RouterModule.forChild(MainRoutes)],
  declarations: [DashboardComponent, AboutComponent, DomainComponent, HostingComponent
    , BlogComponent, ContactComponent, GetStartedComponent],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class MainModule {}
