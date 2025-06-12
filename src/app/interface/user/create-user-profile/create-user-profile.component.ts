import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./create-user-profile.component.scss']
})
export class CreateUserProfileComponent {
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router
    ) {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {

    if (this.profileForm.valid) {
      const { username, email, password } = this.profileForm.value;
      const userData = { username, email, password };
      this.userService.createUser(userData).subscribe({
        next: (response) => {
          this.route.navigate(['/user', response, 'bot']);
        },
        error: (err) => {
          console.log(err)
        }
      });
    }
  }
}
