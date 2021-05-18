import { Component, Input, OnInit } from '@angular/core';
import { AppColors } from 'src/app/shared/constants/colors';
import { IBtnConfig } from 'src/app/shared/ui-components/button/button.component';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  @Input() shop: any;
  constructor() { }
  shopNowBtnConfig: IBtnConfig = {
    text: 'Shop Now',
    fill: AppColors.primaryColor,
    textColor: AppColors.white,
  }
  ngOnInit(): void {
    this.shopNowBtnConfig.link = this.shop.link;
  }

}
