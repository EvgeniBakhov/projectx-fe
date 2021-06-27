import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDataCardComponent } from './estate-data-card.component';

describe('EstateDataCardComponent', () => {
  let component: EstateDataCardComponent;
  let fixture: ComponentFixture<EstateDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstateDataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
