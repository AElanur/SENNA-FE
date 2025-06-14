import { Routes } from '@angular/router';
import { InterfaceComponent} from './interface/interface.component';
import {LoginComponent} from './interface/user/login/login.component';
import {CreateUserProfileComponent} from './interface/user/create-user-profile/create-user-profile.component';
import {CreateBotComponent} from './interface/user/create-bot/create-bot.component';
import {AuthGuard} from './auth/auth.guard';

export const routeConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CreateUserProfileComponent },
  { path: 'user/:userID/bot', component: CreateBotComponent, canActivate: [AuthGuard] },
  { path: 'user/:userID/chat/:chatID', component: InterfaceComponent, canActivate: [AuthGuard] },
];

export default routeConfig;
