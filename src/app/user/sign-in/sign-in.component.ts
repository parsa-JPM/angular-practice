import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  apiError?: String;

  constructor(private userSvc: UserService, private router: Router) {}

  signIn() {
    this.userSvc.signIn(this.credentials).subscribe({
      next: () => {
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.error(err);
        this.apiError = err.error.error;
      },
    });
  }
}
