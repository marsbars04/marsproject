import { NgModule } from '@angular/core'
import { GlobalModule } from './global.module'
import { DashboardComponent } from '../pages/dashboard/dashboard.component'
import { RouterModule } from '@angular/router'
import { MainRoutes } from '../routes/main.routes'

@NgModule({
  imports: [GlobalModule, RouterModule.forChild(MainRoutes)],
  declarations: [DashboardComponent],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class MainModule {}
