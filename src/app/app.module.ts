import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Needed for Touch functionality of Material Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PendingInterceptorModule } from '../@fury/shared/loading-indicator/pending-interceptor.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import {AuthModule} from './auth/auth.module';
import {RouterModule} from '@angular/router';
import { EventCardComponent } from './cards/event-card/event-card.component';
import { EstateCardComponent } from './cards/estate-card/estate-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import { AddressPipe } from './pipes/address.pipe';
import { PegiRatingPipe } from './pipes/pegi-rating.pipe';
import {CardsModule} from './cards/cards.module';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { EstateDetailsComponent } from './pages/estate-details/estate-details.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import {PageLayoutModule} from '../@fury/shared/page-layout/page-layout.module';
import {ListModule} from '../@fury/shared/list/list.module';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FuryCardModule} from '../@fury/shared/card/card.module';
import { CarouselComponent } from './carousel/carousel.component';
import {GoogleMapsModule} from './pages/maps/google-maps/google-maps.module';
import {EstatesDashboardComponent} from './pages/estates-dashboard/estates-dashboard.component';
import {EventsDashboardComponent} from './pages/events-dashboard/events-dashboard.component';
import {PageModule} from '../@fury/shared/page/page.module';
import { ReservationDialogComponent } from './dialogs/reservation-dialog/reservation-dialog.component';
import {LoadingIndicatorModule} from '../@fury/shared/loading-indicator/loading-indicator.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {QRCodeModule} from 'angularx-qrcode';
import {BasicAuthInterceptor} from './auth/interceptors/basic-auth.interceptor';
import {BreadcrumbsModule} from '../@fury/shared/breadcrumbs/breadcrumbs.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


@NgModule({
    imports: [
        // Angular Core Module // Don't remove!
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // Fury Core Modules
        AppRoutingModule,

        // Layout Module (Sidenav, Toolbar, Quickpanel, Content)
        LayoutModule,

        // Displays Loading Bar when a Route Request or HTTP Request is pending
        PendingInterceptorModule,

        // Register a Service Worker (optional)
        // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
        AuthModule,
        RouterModule,
        PageLayoutModule,
        ListModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatPaginatorModule,
        FuryCardModule,
        GoogleMapsModule,
        FlexModule,
        MatCardModule,
        CardsModule,
        PageModule,
        LoadingIndicatorModule,
        MatDialogModule,
        MatButtonModule,
        QRCodeModule,
        BreadcrumbsModule,
        MatCheckboxModule,
        MatSortModule
    ],
  declarations: [
      AppComponent,
      EventDetailsComponent,
      EstateDetailsComponent,
      MyBookingsComponent,
      MyReservationsComponent,
      CarouselComponent,
      EventsDashboardComponent,
      EstatesDashboardComponent,
      ReservationDialogComponent,
      NotFoundPageComponent],
  bootstrap: [AppComponent],
  exports: [
  ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: BasicAuthInterceptor,
          multi: true
      },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill'
      } as MatFormFieldDefaultOptions
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom'
      } as MatSnackBarConfig
    }
  ]
})
export class AppModule {
}
