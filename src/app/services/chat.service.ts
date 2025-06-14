import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ChatRepository} from '../repository/chat.repository';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private chatRepository: ChatRepository) { }

  createChat(user_id: number): Observable<any> {
    return this.chatRepository.createChat(user_id);
  }

  getChatParticipants(chat_id: number): Observable<any> {
    return this.chatRepository.getChatParticipants(chat_id);
  }
}
