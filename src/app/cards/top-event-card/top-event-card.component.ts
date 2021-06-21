import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';

@Component({
  selector: 'fest-finder-top-event-card',
  templateUrl: './top-event-card.component.html',
  styleUrls: ['./top-event-card.component.scss']
})
export class TopEventCardComponent implements OnInit {
  @Input()
  event: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
