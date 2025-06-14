import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Chat} from '../models/chat.model';


@Injectable({ providedIn: 'root' })
export class ChatRepository {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createChat(bot_data: any): Observable<Chat> {
    return this.http.post<Chat>(`${this.apiUrl}/chat`, bot_data)
  }

  getChatParticipants(chat_id: number): Observable<Chat> {
    return this.http.get<any>(`${this.apiUrl}/chat/${chat_id}/participants`);
  }

}
