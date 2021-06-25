import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSuggestionCardComponent } from './event-suggestion-card.component';

describe('EventSuggestionCardComponent', () => {
  let component: EventSuggestionCardComponent;
  let fixture: ComponentFixture<EventSuggestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSuggestionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSuggestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
