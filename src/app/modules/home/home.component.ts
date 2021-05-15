import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppColors } from 'src/app/shared/constants/colors';
import { IBtnConfig, IBtnTypes } from 'src/app/shared/ui-components/button/button.component';
import { ModalComponent } from 'src/app/shared/ui-components/modal/modal.component';
import { CommonImagesUrl } from 'src/assets/images/ImagesUrl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @ViewChild('loginModal') loginModal!: ModalComponent;

  constructor() { }
  commonImagesUrls = CommonImagesUrl;
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
  ngOnInit(): void {

  }

  openLoginModal() {
    this.loginModal.showModal();
  }
  closeLoginModal() {
    this.loginModal.closeModal();
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
