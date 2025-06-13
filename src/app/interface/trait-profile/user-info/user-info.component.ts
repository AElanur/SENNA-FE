import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model';
import {ChatService} from '../../../services/chat.service';

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
    private router: ActivatedRoute) {
  }

  ngOnInit() {
    const chatID = Number(this.router.snapshot.paramMap.get('chatID'));
    this.getUsername(chatID)
  }

  getUsername(chatID: number): void {
    this.chatService.getChatParticipants(chatID).subscribe({
      next: (response: any) => {
        console.log(response.username)
        this.user = response.username;
      },
      error: (err) => {
        console.error('Error fetching messages:', err);
      }
    });
  }
}
