import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewEmployeeComponent } from './overview-employee.component';

describe('OverviewEmployeeComponent', () => {
  let component: OverviewEmployeeComponent;
  let fixture: ComponentFixture<OverviewEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
