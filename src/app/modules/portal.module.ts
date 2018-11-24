import { NgModule } from '@angular/core'
import { RouterModule, PreloadAllModules } from '@angular/router'
import { GlobalModule } from './global.module'
import { LoginComponent } from '../pages/login/login.component'
import { PortalRoutes } from '../routes/portal.routes'

@NgModule({
  imports: [GlobalModule, RouterModule.forChild(PortalRoutes)],
  declarations: [LoginComponent],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class PortalModule {}
