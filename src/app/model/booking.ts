import {Estate} from './estate';
import {User} from './user';
import {BookingStatus} from './enums/booking-status';

export interface Booking {
    id: number;
    estate: Estate;
    fromDate: Date;
    toDate: Date;
    totalPrice: number;
    user: User;
    status: BookingStatus;
    comment: string;
}
