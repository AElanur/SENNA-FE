import { Component, Input } from '@angular/core';
import { Message } from '../../../../message/message.model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-message-bubble',
  imports: [
    NgClass
  ],
  templateUrl: './message-bubble.component.html',
  styleUrl: './message-bubble.component.scss'
})
export class MessageBubbleComponent {
  @Input() message!: Message;

  get isBot(): boolean {
    return this.message.sender === 'Bot';
  }
}
