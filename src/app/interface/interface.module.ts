import { NgModule } from '@angular/core';
import { ChatGridComponent } from './chat-interface/chat-grid/chat-grid.component';
import { SharedModule } from '../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatGridComponent
  ],
  providers: [],
  bootstrap: []
})
export class InterfaceModule {}
