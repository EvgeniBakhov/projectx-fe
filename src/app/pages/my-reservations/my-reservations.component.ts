import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {User} from '../../model/user';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';
import {Reservation} from '../../model/reservation';
import {ReservationService} from '../../service/reservation.service';

@Component({
    selector: 'fest-finder-my-reservations',
    templateUrl: './my-reservations.component.html',
    styleUrls: ['./my-reservations.component.scss']
})
export class MyReservationsComponent implements OnInit, AfterViewInit {

    @Input()
    displayedColumns: string[] = ['id', 'eventId', 'eventName', 'fromDate', 'toDate', 'status', 'cancel'];
    pageSize = 10;
    dataSource: MatTableDataSource<Reservation> | null;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    user: User;

    constructor(private authService: AuthService, private reservationService: ReservationService, private router: Router) {
    }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource();
        this.getData().subscribe(reservations => {
            this.dataSource.data = reservations;
        });
    }

    getData() {
        return this.reservationService.getReservationsForCurrentUser();
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

    cancelReservation(reservation: Reservation) {
        this.reservationService.cancelReservation(reservation.id).subscribe(response => {
            this.reloadComponent();
        });
    }

    navigateToEvent(reservation: Reservation) {
        this.router.navigate([`/event/${reservation.event.id}`]);
    }

    navigateToReservation(reservation: Reservation) {
        this.router.navigate([`/reservation/${reservation.id}`]);
    }

    private reloadComponent() {
        const currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}
