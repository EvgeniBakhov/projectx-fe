import { Pipe, PipeTransform } from '@angular/core';
import {UserType} from '../model/enums/user-type';

@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {

  transform(userType: UserType): string {
    return UserType[userType];
  }
}
