import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AppColors } from '../../shared/constants/colors';
import { IBtnConfig, IBtnTypes } from '../../shared/ui-components/button/button.component';
import { ModalComponent } from '../../shared/ui-components/modal/modal.component';
import { CommonImagesUrl } from 'src/assets/images/ImagesUrl';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @ViewChild('loginModal') loginModal!: ModalComponent;
  @ViewChild('signupModal') signupModal!: ModalComponent;

  constructor(
    private userService: UserService,
    private storageService: StorageService,

  ) { }
  commonImagesUrls = CommonImagesUrl;
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
    type: IBtnTypes.PRIMARY,
    fill: AppColors.white
  }
  signINButtonConfig: IBtnConfig = {
    text: 'Sign In',
    type: IBtnTypes.TEXT,
    textColor: AppColors.white
  }
  user: any = null;
  signInSub: any;
  signOutSub: any;
  ngOnInit(): void {
    this.subscribeToSignIn();
    this.subscribeToSignOut();
    this.getCachedUserData();
  }

  getCachedUserData() {

    const user = this.storageService.getItem('user');
    if (user.token) {
      this.userService.signin(user)
    }
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
  becomeSellerConfig: IBtnConfig = {
    type: IBtnTypes.PRIMARY,
    text: 'Become a Seller',
    fill: AppColors.primaryColor,
    textColor: AppColors.white
  }
  features = [
    {
      title: 'No waiting',
      subtitle: 'Say goodbye to waiting for your turn',
      imageUrl: CommonImagesUrl.NOWAIT
    },
    {
      title: 'Prepaid Orders',
      subtitle: 'Dodge the lines by paying up in advance for your cart',
      imageUrl: CommonImagesUrl.PREPAID_ORDER
    },
    {
      title: 'First Priority',
      subtitle: 'You\'ll be notified once the order is packed',
      imageUrl: CommonImagesUrl.FIRST_PRIORITY
    }
  ]
}
