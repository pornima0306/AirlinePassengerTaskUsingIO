import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlingDashboardComponent } from './airling-dashboard.component';

describe('AirlingDashboardComponent', () => {
  let component: AirlingDashboardComponent;
  let fixture: ComponentFixture<AirlingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
