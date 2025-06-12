import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResilienceProfileComponent } from './resilience-profile.component';

describe('ResilienceProfileComponent', () => {
  let component: ResilienceProfileComponent;
  let fixture: ComponentFixture<ResilienceProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResilienceProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResilienceProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
