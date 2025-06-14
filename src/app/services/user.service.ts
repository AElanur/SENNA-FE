import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UserRepository} from '../repository/user.repository';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: any;

  constructor(private userRepository: UserRepository) { }

  loginUser(userInfo: User): Observable<any> {
    return this.userRepository.loginUser(userInfo)
  }

  logoutUser(): Observable<any> {
    return this.userRepository.logoutUser()
  }

  createUser(userInfo: User): Observable<any> {
    return this.userRepository.createUser(userInfo)
  }
}
