import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../../../services/chat.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bot-profile-field',
  imports: [],
  templateUrl: './bot-profile-field.component.html',
  styleUrl: './bot-profile-field.component.scss'
})
export class BotProfileFieldComponent implements OnInit {
  bot = null;
  constructor(
    private chatService: ChatService,
    private router: ActivatedRoute) {
  }

  ngOnInit() {
    const chatID = Number(this.router.snapshot.paramMap.get('chatID'));
    this.getBotName(chatID)
  }

  getBotName(chatID: number): void {
    this.chatService.getChatParticipants(chatID).subscribe({
      next: (bot: any) => {
        this.bot = bot.chatbot_name;
      },
      error: (err) => {
        console.error('Error fetching messages:', err);
      }
    });
  }
}
