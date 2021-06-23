import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsRoutingModule } from './google-maps-routing.module';
import { GoogleMapsComponent } from './google-maps.component';
import { GoogleMapsModule as _GoogleMapsModule } from '@angular/google-maps';

@NgModule({
    imports: [
        CommonModule,
        GoogleMapsRoutingModule,
        _GoogleMapsModule
    ],
    exports: [
        GoogleMapsComponent
    ],
    declarations: [GoogleMapsComponent]
})
export class GoogleMapsModule {
}
