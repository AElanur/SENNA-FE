import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { SharedModule } from '../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    ChatComponent
  ]
})
export class InterfaceModule {}
