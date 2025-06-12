import { Routes } from '@angular/router';
import { InterfaceComponent} from './interface/interface.component';
import {LoginComponent} from './interface/user/login/login.component';
import {CreateUserProfileComponent} from './interface/user/create-user-profile/create-user-profile.component';
import {CreateBotComponent} from './interface/user/create-bot/create-bot.component';

export const routeConfig: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CreateUserProfileComponent },
  { path: 'user/:userID', component: InterfaceComponent },
];

export default routeConfig;
