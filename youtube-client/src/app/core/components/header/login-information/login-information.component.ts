import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-information',
  templateUrl: './login-information.component.html',
  styleUrls: ['./login-information.component.scss'],
})
export class LoginInformationComponent {
  @Input() public userName!: string | null;

  @Input() public isLoggedIn!: boolean | null;

  @Output() public readonly logOut = new EventEmitter();

  @Output() public readonly logIn = new EventEmitter();

  emitLogOut() {
    this.logOut.emit();
  }

  emitLogIn() {
    this.logIn.emit();
  }
}
