import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFieldComponent } from './chat-field.component';

describe('ChatFieldComponent', () => {
  let component: ChatFieldComponent;
  let fixture: ComponentFixture<ChatFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
