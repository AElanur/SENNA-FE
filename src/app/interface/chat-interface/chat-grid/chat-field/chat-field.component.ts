import {afterRender, Component, OnInit} from '@angular/core';
import { MessageFieldComponent } from '../message-field/message-field.component';
import { MessageBubbleComponent } from '../message-bubble/message-bubble.component';
import { MessageService} from '../../../../message/message.service';
import { Message } from '../../../../message/message.model';

@Component({
  selector: 'app-chat-field',
  imports: [
    MessageFieldComponent,
    MessageBubbleComponent
  ],
  standalone: true,
  templateUrl: './chat-field.component.html',
  styleUrl: './chat-field.component.scss',
})
export class ChatFieldComponent implements OnInit {
  messages: Message[] | null = null;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.getMessages(1)
  }

  getMessages(chat_id: number): void {
    this.messageService.getMessages(chat_id).subscribe({
      next: (messages: Message[]) => {
        this.messages = messages;
      },
      error: (err) => {
        this.messages = [];
        console.error('Error fetching messages:', err);
      }
    });
  }

  onMessageSent(): void {
    this.getMessages(1);
  }
}
