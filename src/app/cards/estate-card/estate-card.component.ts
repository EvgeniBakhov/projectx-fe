import {Component, Input, OnInit} from '@angular/core';
import {Estate} from '../../model/estate';

@Component({
  selector: 'fest-finder-estate-card',
  templateUrl: './estate-card.component.html',
  styleUrls: ['./estate-card.component.scss']
})
export class EstateCardComponent implements OnInit {

  @Input()
  estate: Estate;

  constructor() { }

  ngOnInit(): void {
  }

}
