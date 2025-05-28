import { Injectable } from '@angular/core';
import { MessageRepository } from './message.repository';
import { Message } from './message.model';
import {Observable, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  constructor(private messageRepo: MessageRepository) {}

  sendMessage(message: Message): Observable<Message> {
    return this.messageRepo.sendMessage(message);
  }

  getMessages(chatId: number): Observable<Message[]> {
    return this.messageRepo.getMessages(chatId)
  }
}
