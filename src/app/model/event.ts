import {AgeRestriction} from './enums/age-restriction';
import {Address} from './address';
import {User} from './user';
import {EventType} from './enums/event-type';
import {PlaceType} from './enums/place-type';
import {EventStatus} from './enums/event-status';

export interface Event {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    capacity: number;
    availableSeats: number;
    ageRestrictions: AgeRestriction;
    address: Address;
    organizer: User;
    type: EventType;
    placeType: PlaceType;
    status: EventStatus;
    pictures: string[];
    thumbnail: string;
}
