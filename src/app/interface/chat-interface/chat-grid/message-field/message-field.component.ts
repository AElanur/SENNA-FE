import { Component } from '@angular/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MessageService} from '../../../../message/message.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-field',
  imports: [
    TextFieldModule,
    FormsModule
  ],
  templateUrl: './message-field.component.html',
  styleUrl: './message-field.component.scss',
})
export class MessageFieldComponent {
  messageContent: string = '';
  constructor(private messageService: MessageService) {}

  sendMessage(message: string): void {
    if (!this.messageContent.trim()) {
      return; // Don't send empty messages
    }

    this.messageService.sendMessage({
      content: message
    }).subscribe({
      next: (response) => {
        this.messageContent = '';
        console.log('Message sent:', response);
      },
      error: (err) => {
        console.error('Error sending message:', err);
      }
    });
  }
}
