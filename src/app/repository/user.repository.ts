import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {User} from '../models/user.model';


@Injectable({ providedIn: 'root' })
export class UserRepository {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  loginUser(userInfo: User): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/user/login`, userInfo)
  }

  logoutUser(): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/user/logout`, {})
  }

  createUser(userInfo: User): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/user`, userInfo)
  }
}
