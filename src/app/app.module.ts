import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutes } from './app.routes'
import { AppComponent } from './app.component'
import { RouterModule, PreloadAllModules } from '@angular/router'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { LayoutPortalComponent } from './layout/portal/layout.portal.component'
import { GlobalModule } from './modules/global.module'
import { LayoutMainComponent } from './layout/main/layout.main.component'

@NgModule({
  declarations: [AppComponent, LayoutPortalComponent, LayoutMainComponent],
  imports: [BrowserModule, NoopAnimationsModule, GlobalModule, RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
