import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppColors } from 'src/app/shared/constants/colors';
import { IBtnConfig } from 'src/app/shared/ui-components/button/button.component';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {

  city: any;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.city = params['citySlug']
    })
  }

  commonShopNowBtnConfig: IBtnConfig = {
    text: 'Shop Now',
    fill: AppColors.primaryColor,
    textColor: AppColors.white,
  }
  data = [
    {
      title: 'Get grocery from your nearest sellers',
      subtitle: 'Find these shops in your nearby markets. You can even walk upto there. Good for your health.',
      shops: Array(20).fill('').map((x) => {
        return {
          name: 'Cactus Club Cafe',
          rating: 4,
          link: '/',
          time: 20,
          image: 'https://source.unsplash.com/1600x900/?food'
        }
      })
    },
    {
      title: 'Other shops in Karnal',
      subtitle: 'These are the ones you\'ll have to put an extra little effort. But totally worth it.',
      shops: Array(20).fill({
        image: 'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=300,format=auto,quality=50/https://cdn.doordash.com/media/photos/91cda9c0-fcae-446a-85eb-6545819355d8-retina-large-jpeg',
        name: 'Cactus Club Cafe',
        rating: 4,
        time: 20,
      })
    },
  ]

  getBtnConfigForShop(shop: any) {
    return {
      ...this.commonShopNowBtnConfig,
      link: '/'
    }
  }

}
