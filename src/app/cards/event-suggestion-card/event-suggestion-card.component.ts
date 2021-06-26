import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';

@Component({
  selector: 'fest-finder-event-suggestion-card',
  templateUrl: './event-suggestion-card.component.html',
  styleUrls: ['./event-suggestion-card.component.scss']
})
export class EventSuggestionCardComponent implements OnInit {
  @Input()
  event: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
