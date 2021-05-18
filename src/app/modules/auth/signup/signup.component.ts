import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { commonIconUrls } from '../../../../assets/icons/CommonIconsUrl';
import { AppColors } from '../../../shared/constants/colors';
import { IBtnConfig, IBtnTypes } from '../../../shared/ui-components/button/button.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor() { }
  @Output() close = new EventEmitter<boolean>(false);
  commonIconUrls = commonIconUrls
  ngOnInit(): void {
  }
  signupBtnConfig: IBtnConfig = {
    textColor: AppColors.darkGrey,
    type: IBtnTypes.PRIMARY,
    fill: AppColors.primaryColor,
    text: 'Sign up',
    disabled: true
  }
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  forgotPasswordBtnConfig : IBtnConfig = {
    text: 'Forgot Password ?',
    textColor: AppColors.google,
  }
  errorMessage = ''
  closeModal() {
    this.close.emit(true);
  }
}
