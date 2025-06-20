import { Component, Output, EventEmitter } from '@angular/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MessageService} from '../../../../services/message.service';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-message-field',
  imports: [
    TextFieldModule,
    FormsModule
  ],
  templateUrl: './message-field.component.html',
  styleUrl: './message-field.component.scss',
  standalone: true
})
export class MessageFieldComponent {
  response: any = '';
  messageContent: string = '';
  sending: boolean = false;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute) {}
  @Output() messageSent = new EventEmitter<void>();
  @Output() loadingChange = new EventEmitter<boolean>();

  onTextareaKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey) {
      event.preventDefault();
      if (this.messageContent.trim()) {
        this.sendMessage(this.messageContent);
      }
    }
  }

  sendMessage(message: string): void {
    const userId = Number(this.route.snapshot.paramMap.get('userID'));
    const chatId = Number(this.route.snapshot.paramMap.get('chatID'));
    if (!this.messageContent.trim()) {
      return;
    }
    this.sending = true;
    this.loadingChange.emit(this.sending);
    this.messageService.sendMessage({
      chat_id: chatId,
      user_id: userId,
      content: message,
      sender_type: "user"
    }).subscribe({
      next: (response) => {
        this.response = response
        this.messageContent = '';
        this.sending = false;
        this.loadingChange.emit(this.sending);
        if (response.status === 'success') {
          setTimeout(() => {
            this.response = '';
          }, 5000);
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
