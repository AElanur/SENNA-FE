import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {User} from '../models/user.model';


@Injectable({ providedIn: 'root' })
export class UserRepository {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUser(userInfo: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user/login`, userInfo)
  }

  createUser(userInfo: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user`, userInfo)
  }
}
