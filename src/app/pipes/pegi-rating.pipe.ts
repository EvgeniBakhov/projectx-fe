import { Pipe, PipeTransform } from '@angular/core';
import {AgeRestriction} from '../model/enums/age-restriction';

@Pipe({
  name: 'pegiRating'
})
export class PegiRatingPipe implements PipeTransform {

  transform(value: AgeRestriction): string {
    switch (value) {
      case AgeRestriction.EVERYONE: return './assets/img/icons/pegi/pegi-3.svg';
      case AgeRestriction.EVERYONE_SEVEN_PLUS: return './assets/img/icons/pegi/pegi-7.svg';
      case AgeRestriction.TEEN: return './assets/img/icons/pegi/pegi-12.svg';
      case AgeRestriction.MATURE: return './assets/img/icons/pegi/pegi-16.svg';
      case AgeRestriction.ADULT: return './assets/img/icons/pegi/pegi-18.svg';
    }
  }
}
