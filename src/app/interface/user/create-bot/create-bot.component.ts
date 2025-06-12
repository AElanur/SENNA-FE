import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ChatRepository} from '../../../repository/chat.repository';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./create-bot.component.scss']
})
export class CreateBotComponent {
  botForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private chatRepository: ChatRepository,
    private router: ActivatedRoute,
    private route: Router) {
    const userId = Number(this.router.snapshot.paramMap.get('userID'));

    this.botForm = this.fb.group({
      userID: [userId],
      botName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.botForm.valid) {

        const { userID, botName } = this.botForm.value;
        const botData = { userID, botName };
        this.chatRepository.createChat(botData).subscribe({
          next: (response) => {
            this.route.navigate(['user', userID, 'chat', response]);
          },
          error: (err) => {
            console.log(err)
          }
        });
    }
  }
}
