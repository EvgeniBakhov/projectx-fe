export class Address {
    id?: number;
    region: string;
    country: string;
    subdivision?: string;
    city: string;
    street: string;
    additionalDetails?: string;


    constructor(region: string, country: string, subdivision: string, city: string, street: string, additionalDetails: string) {
        this.region = region;
        this.country = country;
        this.subdivision = subdivision;
        this.city = city;
        this.street = street;
        this.additionalDetails = additionalDetails;
    }
}
