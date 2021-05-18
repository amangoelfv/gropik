import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AppColors } from '../../shared/constants/colors';
import { IBtnConfig, IBtnTypes } from '../../shared/ui-components/button/button.component';
import { CommonImagesUrl } from 'src/assets/images/ImagesUrl';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
    private storageService: StorageService,

  ) { }
  commonImagesUrls = CommonImagesUrl;

  ngOnInit(): void {

    this.getCachedUserData();
  }

  getCachedUserData() {

    const user = this.storageService.getItem('user');
    if (user?.token) {
      this.userService.signin(user)
    }

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
