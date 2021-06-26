import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {Router} from '@angular/router';

@Component({
  selector: 'fest-finder-top-event-card',
  templateUrl: './top-event-card.component.html',
  styleUrls: ['./top-event-card.component.scss']
})
export class TopEventCardComponent implements OnInit {
  @Input()
  event: Event;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  learnMoreClick(): void {
    this.router.navigate(['/event/' + this.event.id]);
  }
}
