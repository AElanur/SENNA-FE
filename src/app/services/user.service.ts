import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UserRepository} from '../repository/user.repository';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userRepository: UserRepository) { }

  getUser(userInfo: User): Observable<User> {
    return this.userRepository.getUser(userInfo)
  }

  createUser(userInfo: User): Observable<User> {
    return this.userRepository.createUser(userInfo)
  }
}
