import { Component, Output, EventEmitter } from '@angular/core';
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
  chatId: number = 1;
  sending: boolean = false;
  constructor(private messageService: MessageService) {}
  @Output() messageSent = new EventEmitter<void>();

  onTextareaKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey) {
      event.preventDefault(); // Prevent newline
      if (this.messageContent.trim()) {
        this.sendMessage(this.messageContent);
      }
    }
  }

  sendMessage(message: string): void {
    if (!this.messageContent.trim()) {
      return;
    }
    this.sending = true;
    this.messageService.sendMessage(
      this.chatId, {
      chat_id: 1,
      sender_id: 1,
      content: message,
      sender_type: "user"
    }).subscribe({
      next: (response) => {
        this.messageContent = '';
        this.sending = false;
        console.log('Message sent:', response);
        if (response.status === 'success') {
          this.messageSent.emit();
        }
      },
      error: (err) => {
        this.sending = false;
        console.error('Error sending message:', err);
      }
    });
  }
}
