import {UserType} from './enums/user-type';
import {Address} from './address';

export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    password?: string;
    type: UserType;
    picture: string;
    address: Address;
}
