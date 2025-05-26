import { Component } from '@angular/core';

@Component({
  selector: 'chat-component',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  title = 'Chat Interface';
  sendMessage() {
    // Your send logic here
  }
}
