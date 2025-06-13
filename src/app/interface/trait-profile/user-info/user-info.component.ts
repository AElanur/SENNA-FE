import {Component, OnInit} from '@angular/core';
import { UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Message} from '../../../models/message.model';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-info',
  imports: [
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {
  user: User| null = null;
  constructor(
    private userService: UserService,
    private router: ActivatedRoute) {
  }

  ngOnInit() {
    const userId = Number(this.router.snapshot.paramMap.get('userID'));
    console.log(userId)
    this.getUsername(userId)
  }

  getUsername(userId: number): void {
    this.userService.getUser(userId).subscribe({
      next: (user: User) => {
        console.log(user)
        this.user = user;
      },
      error: (err) => {
        console.error('Error fetching messages:', err);
      }
    });
  }
}
