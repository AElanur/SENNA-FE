import { Component } from '@angular/core';
import { ChatGridComponent } from './chat-interface/chat-grid/chat-grid.component';
import { UserProfileComponent } from './trait-profile/user-profile.component';
import { ResilienceProfileComponent } from './resilience-profile/resilience-profile.component';

@Component({
  selector: 'app-interface',
  imports: [
    ChatGridComponent,
    UserProfileComponent,
    ResilienceProfileComponent
  ],
  templateUrl: './interface.component.html',
  standalone: true,
  styleUrl: './interface.component.scss'
})
export class InterfaceComponent {
  userId: string = '123';
}
