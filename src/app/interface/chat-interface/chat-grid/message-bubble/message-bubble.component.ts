import { Component, Input } from '@angular/core';
import { Message } from '../../../../models/message.model';
import {DatePipe, NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-message-bubble',
  imports: [NgClass, DatePipe, NgForOf],
  templateUrl: './message-bubble.component.html',
  standalone: true,
  styleUrl: './message-bubble.component.scss'
})
export class MessageBubbleComponent {
  @Input() messages: Message[] = [];
  @Input() bubble: boolean = false;
  @Input() loadingBubble: string = 'bot';

  isBot(message: Message): boolean {
    return message.sender_type === 'bot';
  }
}
