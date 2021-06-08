import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {ToolbarModule} from '../layout/toolbar/toolbar.module';
import {LoadingIndicatorModule} from '../../@fury/shared/loading-indicator/loading-indicator.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    LoadingIndicatorModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
