import { NgModule, ApplicationRef } from '@angular/core'
import { RouterModule, PreloadAllModules } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoaderComponent } from '../components/loader/loader.component'
import { MaterialModule } from './material.module'

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [LoaderComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, LoaderComponent],
  providers: [],
  entryComponents: [],
})
export class GlobalModule {}
