import {UserType} from './enums/user-type';
import {Address} from './address';

export class User {
    id?: number;
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


    constructor(username: string,
                firstName: string,
                lastName: string,
                age: number,
                email: string,
                phone: string,
                address: Address,
                password?: string,
                type?: UserType,
                picture?: string
                ) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.type = type;
        this.picture = picture;
        this.address = address;
    }
}
