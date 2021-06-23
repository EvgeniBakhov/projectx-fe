import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatesDashboardComponent } from './estates-dashboard.component';

describe('EstatesDashboardComponent', () => {
  let component: EstatesDashboardComponent;
  let fixture: ComponentFixture<EstatesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
