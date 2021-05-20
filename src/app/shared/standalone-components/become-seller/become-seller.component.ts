import { Component, OnInit } from '@angular/core';
import { CommonImagesUrl } from '../../../../assets/images/ImagesUrl';
import { AppColors } from '../../constants/colors';
import { IBtnConfig, IBtnTypes } from '../../ui-components/button/button.component';

@Component({
  selector: 'app-become-seller',
  templateUrl: './become-seller.component.html',
  styleUrls: ['./become-seller.component.scss']
})
export class BecomeSellerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  commonImagesUrls = CommonImagesUrl;
    becomeSellerConfig: IBtnConfig = {
      type: IBtnTypes.PRIMARY,
      text: 'Become a Seller',
      fill: AppColors.primaryColor,
      textColor: AppColors.white
    }

}
