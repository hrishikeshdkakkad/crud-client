import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeeDetailsComponent } from './all-employee-details.component';

describe('AllEmployeeDetailsComponent', () => {
  let component: AllEmployeeDetailsComponent;
  let fixture: ComponentFixture<AllEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
