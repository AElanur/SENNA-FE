import {AfterViewChecked, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { MessageFieldComponent } from '../message-field/message-field.component';
import { MessageBubbleComponent } from '../message-bubble/message-bubble.component';
import { MessageService} from '../../../../services/message.service';
import { Message } from '../../../../models/message.model';
import {ActivatedRoute} from '@angular/router';

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
export class ChatFieldComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageList') private messageList!: ElementRef;
  @Output() messageSent = new EventEmitter<void>();
  messages: Message[] | null = null;
  loadBubble: boolean = false;
  isBot: string = 'bot';
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    const chatId = Number(this.route.snapshot.paramMap.get('chatID'));
    this.getMessages(chatId)
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.messageList.nativeElement.scrollTop = this.messageList.nativeElement.scrollHeight;
    } catch (err) {}
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
    const chatId = Number(this.route.snapshot.paramMap.get('chatID'));
    this.getMessages(chatId);
    this.messageSent.emit();
  }

  onLoadingChange(isLoading: boolean) {
    this.loadBubble = isLoading;
  }
}
