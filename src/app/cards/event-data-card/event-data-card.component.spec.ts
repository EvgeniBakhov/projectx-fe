import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDataCardComponent } from './event-data-card.component';

describe('EventDataCardComponent', () => {
  let component: EventDataCardComponent;
  let fixture: ComponentFixture<EventDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
