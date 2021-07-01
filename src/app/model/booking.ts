import {Estate} from './estate';
import {User} from './user';
import {BookingStatus} from './enums/booking-status';

export class Booking {
    id: number;
    estate: Estate;
    fromDate: Date;
    toDate: Date;
    totalPrice: number;
    user: User;
    status: BookingStatus;
    comment: string;


    constructor(fromDate: Date, toDate: Date) {
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
}
