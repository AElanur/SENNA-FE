import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ChatRepository} from '../../../repository/chat.repository';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalComponent} from '../../modal/modal.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  imports: [
    ReactiveFormsModule,
    ModalComponent,
    NgIf
  ],
  styleUrls: ['./create-bot.component.scss']
})
export class CreateBotComponent implements OnInit {
  botForm: FormGroup;
  showModal = true;

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

  ngOnInit(): void {
  }
}
