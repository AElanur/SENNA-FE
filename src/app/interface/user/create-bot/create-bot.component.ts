import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./create-bot.component.scss']
})
export class CreateBotComponent {
  botForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.botForm = this.fb.group({
      botName: ['', Validators.required],
      botDescription: ['']
    });
  }

  onSubmit() {
    if (this.botForm.valid) {
      console.log('Bot data:', this.botForm.value);
      // Implement bot creation logic here
    }
  }
}
