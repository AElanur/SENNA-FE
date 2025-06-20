import { Component } from '@angular/core';
import { ChatFieldComponent } from './chat-field/chat-field.component';
import { BotProfileFieldComponent } from './bot-profile-field/bot-profile-field.component';
import {TraitListComponent} from './trait-list/trait-list.component';


@Component({
  selector: 'app-chat-grid',
  templateUrl: './chat-grid.component.html',
  styleUrls: ['./chat-grid.component.scss'],
  standalone: true,
  imports: [
    ChatFieldComponent,
    BotProfileFieldComponent,
    TraitListComponent
  ]
})
export class ChatGridComponent {
  title = 'Chat Interface';
  traitRefresh = 0;

  onMessageSent() {
    this.traitRefresh++;
  }
}
