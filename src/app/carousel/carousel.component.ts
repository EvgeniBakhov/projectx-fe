import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn, fadeOut} from './carousel.animations';

@Component({
  selector: 'fest-finder-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn)]),
      transition('* => void', [useAnimation(fadeOut)]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() slides;

  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
}
