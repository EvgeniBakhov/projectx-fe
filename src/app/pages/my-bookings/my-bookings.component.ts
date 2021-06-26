import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ListColumn} from '../../../@fury/shared/list/list-column.model';
import {MatTableDataSource} from '@angular/material/table';
import {Booking} from '../../model/booking';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {User} from '../../model/user';
import {AuthService} from '../../auth/services/auth.service';
import {BookingService} from '../../service/booking.service';
import {Router} from '@angular/router';

@Component({
  selector: 'fest-finder-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit, AfterViewInit {

  @Input()
  displayedColumns: string[] = ['id', 'estateId', 'fromDate', 'toDate', 'status', 'totalPrice', 'cancel'];
  pageSize = 10;
  dataSource: MatTableDataSource<Booking> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  user: User;

  constructor(private authService: AuthService, private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.authService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
      this.getData().subscribe(bookings => {
        this.dataSource.data = bookings;
      });
    });
  }

  getData() {
    return this.bookingService.getBookingsByUser(this.user);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  cancelBooking(booking: Booking) {
    this.bookingService.cancelBooking(booking.id).subscribe(response => {
      this.reloadComponent();
    });
  }

  navigateToEstate(booking: Booking) {
    this.router.navigate([`/estate/${booking.estate.id}`]);
  }

  navigateToBooking(booking: Booking) {
    this.router.navigate([`/booking/${booking.id}`]);
  }

  private reloadComponent() {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
