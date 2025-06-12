import { Component } from '@angular/core';
import { TraitListComponent } from './trait-list/trait-list.component';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-user-profile',
  imports: [
    TraitListComponent,
    UserInfoComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

}
