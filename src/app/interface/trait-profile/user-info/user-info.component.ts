import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {ChatService} from '../../../services/chat.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-info',
  imports: [
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {
  user = null;
  constructor(
    private chatService: ChatService,
    private userService: UserService,
    private router: ActivatedRoute,
    private route: Router) {
  }

  ngOnInit() {
    const chatID = Number(this.router.snapshot.paramMap.get('chatID'));
    this.getUsername(chatID)
  }

  getUsername(chatID: number): void {
    this.chatService.getChatParticipants(chatID).subscribe({
      next: (response: any) => {
        this.user = response.username;
      },
      error: (err) => {
        console.error('Error fetching messages:', err);
      }
    });
  }

  logout() {
    this.userService.logoutUser().subscribe({
      next: () => {
        localStorage.removeItem('session_key');
        this.route.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout error:', err);
        this.route.navigate(['/login']);
      }
    });
  }

}
