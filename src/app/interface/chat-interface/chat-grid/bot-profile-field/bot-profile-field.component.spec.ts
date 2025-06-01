import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotProfileFieldComponent } from './bot-profile-field.component';

describe('BotProfileFieldComponent', () => {
  let component: BotProfileFieldComponent;
  let fixture: ComponentFixture<BotProfileFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotProfileFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotProfileFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
