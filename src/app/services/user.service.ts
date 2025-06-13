import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UserRepository} from '../repository/user.repository';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userRepository: UserRepository) { }

  loginUser(userINfo: User): Observable<User> {
    return this.userRepository.loginUser(userINfo)
  }

  getUser(userID: number): Observable<User> {
    return this.userRepository.getUser(userID)
  }

  createUser(userInfo: User): Observable<User> {
    return this.userRepository.createUser(userInfo)
  }
}
