import { Component } from '@angular/core';
import { ChatFieldComponent } from './chat-field/chat-field.component';
import { BotProfileFieldComponent} from './bot-profile-field/bot-profile-field.component';


@Component({
  selector: 'app-chat-grid',
  templateUrl: './chat-grid.component.html',
  styleUrls: ['./chat-grid.component.scss'],
  imports: [
    ChatFieldComponent,
    BotProfileFieldComponent
  ]
})
export class ChatGridComponent {
  title = 'Chat Interface';
  sendMessage() {
    // Your send logic here
  }
}
