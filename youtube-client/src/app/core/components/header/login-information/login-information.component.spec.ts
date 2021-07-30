import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInformationComponent } from './login-information.component';

describe('LoginInformationComponent', () => {
  let component: LoginInformationComponent;
  let fixture: ComponentFixture<LoginInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginInformationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
