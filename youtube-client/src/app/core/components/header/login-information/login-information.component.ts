import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-information',
  templateUrl: './login-information.component.html',
  styleUrls: ['./login-information.component.scss'],
})
export class LoginInformationComponent {
  @Input() userName!: string | null;

  @Input() isLoggedIn!: boolean | null;

  @Output() logOut = new EventEmitter();

  @Output() logIn = new EventEmitter();

  emitLogOut() {
    this.logOut.emit();
  }

  emitLogIn() {
    this.logIn.emit();
  }
}
