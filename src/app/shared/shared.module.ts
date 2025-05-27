import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendButtonComponent } from './components/button/send-button/send-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SendButtonComponent
  ],
  exports: [
    SendButtonComponent, CommonModule
  ]
})
export class SharedModule {}
