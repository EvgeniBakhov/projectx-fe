import {Event} from './event';
import {User} from './user';
import {ReservationStatus} from './enums/reservation-status';

export interface Reservation {
    id: number;
    event: Event;
    user: User;
    status: ReservationStatus;
}
