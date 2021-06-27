import {Address} from './address';
import {EstateType} from './enums/estate-type';
import {User} from './user';

export interface Estate {
    id: number;
    address: Address;
    numOfBedrooms: number;
    area: number;
    type: EstateType;
    name: string;
    rentPrice: number;
    owner: User;
    description: string;
    pictures: string[];
    tags?: string[];
}
