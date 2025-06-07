import { Component, Input } from '@angular/core';
import { Message } from '../../../../message/message.model';
import {DatePipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-message-bubble',
  imports: [
    NgClass,
    DatePipe
  ],
  templateUrl: './message-bubble.component.html',
  styleUrl: './message-bubble.component.scss'
})
export class MessageBubbleComponent {
  @Input() message!: Message;

  get isBot(): boolean {
    return this.message.sender_type === 'bot';
  }
}
