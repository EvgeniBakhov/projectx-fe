import { Pipe, PipeTransform } from '@angular/core';
import {AgeRestriction} from '../model/enums/age-restriction';

@Pipe({
  name: 'pegiRating'
})
export class PegiRatingPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'EVERYONE': return './assets/img/icons/pegi/pegi-3.svg';
      case 'EVERYONE_SEVEN_PLUS': return './assets/img/icons/pegi/pegi-7.svg';
      case 'TEEN': return './assets/img/icons/pegi/pegi-12.svg';
      case 'MATURE': return './assets/img/icons/pegi/pegi-16.svg';
      case 'ADULT': return './assets/img/icons/pegi/pegi-18.svg';
      default: return './assets/img/icons/pegi/pegi-18.svg';
    }
  }
}
