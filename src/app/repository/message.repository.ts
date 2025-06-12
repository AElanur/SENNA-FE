import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Message} from '../models/message.model';

@Injectable({ providedIn: 'root' })
export class MessageRepository {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendMessage(message: Message): Observable<any> {
    return this.http.post<Message>(`${this.apiUrl}/chats/${message.chat_id}/send-message`, message)
  }

  getMessages(chatId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/chats/${chatId}/get-messages`)
  }

}
