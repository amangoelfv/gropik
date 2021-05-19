import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AppColors } from '../../constants/colors';
import { IBtnConfig, } from '../../ui-components/button/button.component';
import { ModalComponent } from '../../ui-components/modal/modal.component';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.scss']
})
export class AuthButtonsComponent implements OnInit {

  user: any = null;
  signInSub: any;
  signOutSub: any;
  @Input('config') set configer(config: any) {
    this.parseButtonConfigs(config)
  }
  @ViewChild('loginModal') loginModal!: ModalComponent;
  @ViewChild('signupModal') signupModal!: ModalComponent;
  constructor(

    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.subscribeToSignIn();
    this.subscribeToSignOut();
  }
  parseButtonConfigs(config: any) {
    this.signUpButtonConfig.textColor = config.signUpButton.textColor;
    this.signUpButtonConfig.fill = config.signUpButton.fillColor;
    this.logoutBtnConfig.fill = config.signUpButton.fillColor;
    this.signINButtonConfig.textColor = config.signInButton.textColor;
    this.userAccountBtnConfig.textColor = config.signInButton.textColor;
    this.signINButtonConfig.fill = config.signInButton.fillColor;
  }
  userAccountBtnConfig: IBtnConfig = {
    textColor: AppColors.white,
    text: ''
  }
  logoutBtnConfig: IBtnConfig = {
    text: 'Sign Out',
    fill: AppColors.white
  }
  signUpButtonConfig: IBtnConfig = {
    text: 'Sign Up',
    fill: AppColors.white
  }
  signINButtonConfig: IBtnConfig = {
    text: 'Sign In',
    textColor: AppColors.white
  }
  ngOnDestroy() {
    this.signInSub.unsubscribe();
    this.signOutSub.unsubscribe();
  }
  openLoginModal() {
    this.loginModal.showModal();
  }
  closeLoginModal() {
    this.loginModal.closeModal();
  }

  openSignupModal() {
    this.signupModal.showModal();
  }
  closeSignupModal() {
    this.signupModal.closeModal();
  }

  subscribeToSignIn() {
    this.signInSub = this.userService.userSignedInSub.subscribe((user) => {
      this.user = user;
      this.userAccountBtnConfig.text = user.name.split(' ')[0] + '\'s Account';
    })
  }

  subscribeToSignOut() {
    this.signOutSub = this.userService.userSignedOutSub.subscribe(() => {
      this.user = null;
    })
  }

  signOut() {
    this.userService.signOut();
  }
}
