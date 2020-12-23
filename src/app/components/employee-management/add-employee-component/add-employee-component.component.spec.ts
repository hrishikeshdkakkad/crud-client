import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponentComponent } from './add-employee-component.component';

describe('AddEmployeeComponentComponent', () => {
  let component: AddEmployeeComponentComponent;
  let fixture: ComponentFixture<AddEmployeeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
