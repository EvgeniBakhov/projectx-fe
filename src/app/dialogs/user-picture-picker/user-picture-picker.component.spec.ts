import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPicturePickerComponent } from './user-picture-picker.component';

describe('UserPicturePickerComponent', () => {
  let component: UserPicturePickerComponent;
  let fixture: ComponentFixture<UserPicturePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPicturePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPicturePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
