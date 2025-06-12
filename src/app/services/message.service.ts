import { Injectable } from '@angular/core';
import { MessageRepository } from '../repository/message.repository';
import { Message } from '../models/message.model';
import {Observable, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  constructor(private messageRepo: MessageRepository) {}

  sendMessage(message: Message): Observable<any> {
    return this.messageRepo.sendMessage(message);
  }

  getMessages(chatId: number): Observable<Message[]> {
    return this.messageRepo.getMessages(chatId)
  }
}
