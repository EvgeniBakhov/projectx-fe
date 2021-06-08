import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {ToolbarModule} from '../layout/toolbar/toolbar.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ToolbarModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
