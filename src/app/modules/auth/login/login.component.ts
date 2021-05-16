import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AppColors } from 'src/app/shared/constants/colors';
import { IBtnConfig, IBtnTypes } from 'src/app/shared/ui-components/button/button.component';
import { commonIconUrls } from 'src/assets/icons/CommonIconsUrl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }
  @Output() close = new EventEmitter<boolean>(false);
  commonIconUrls = commonIconUrls
  ngOnInit(): void {
  }
  loginBtnConfig: IBtnConfig = {
    textColor: AppColors.darkGrey,
    type: IBtnTypes.PRIMARY,
    fill: AppColors.primaryColor,
    text: 'Sign in',
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  forgotPasswordBtnConfig: IBtnConfig = {
    text: 'Forgot Password ?',
    textColor: AppColors.google,
  }
  errorMessage? = ''
  closeModal() {
    this.close.emit(true);
  }

  login() {
    this.loginBtnConfig.showLoader = true;
    this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe((res) => {
      if(res.success) {
        this.userService.signin(res.data?.user);
        this.closeModal();
      } else {
        this.errorMessage = res.reason;
      }
    }).add(() => {
      this.loginBtnConfig.showLoader = false;
    })
  }
}
