import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public username: string;

  public password: string;

  constructor(private authService: AuthService) {
    this.username = '';
    this.password = '';
  }

  onSubmit(form: NgForm) {
    this.authService.logIn(form.value.username, form.value.password);
  }
}
