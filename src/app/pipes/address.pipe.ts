import { Pipe, PipeTransform } from '@angular/core';
import {Address} from '../model/address';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: Address): string {
    return `${value.street},${value.city}, ${value.subdivision ? value.subdivision + ',' : value.country}${value.subdivision ? value.country : ''}`;
  }

}
