import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutes } from './app.routes'
import { AppComponent } from './app.component'
import { RouterModule, PreloadAllModules } from '@angular/router'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { LayoutPortalComponent } from './layout/portal/layout.portal.component'
import { GlobalModule } from './modules/global.module'
import { LayoutMainComponent } from './layout/main/layout.main.component'
import { MainHeaderComponent } from './layout/main/header/header.component';
import { MainFooterComponent } from './layout/main/footer/footer.component';

@NgModule({
  declarations: [AppComponent, LayoutPortalComponent, LayoutMainComponent, MainHeaderComponent, MainFooterComponent],
  imports: [BrowserModule, NoopAnimationsModule, GlobalModule, RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
