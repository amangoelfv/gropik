import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { AppColors } from '../../shared/constants/colors';
import { IBtnConfig } from '../../shared/ui-components/button/button.component';
import { ICarouselConfig } from '../../shared/ui-components/carousel/carousel.component';
import { commonIconUrls } from '../../../assets/icons/CommonIconsUrl';

const nearbyShops = Array(20).fill('').map((x) => {
  return {
    name: 'Cactus Club Cafe',
    rating: 4,
    time: 20,
    image: 'https://source.unsplash.com/1600x900/?food',
    offer: '50% off',
    slug: 'cactus-club-cafe'
  }
})
const otherShops = Array(20).fill({
  image: 'https://source.unsplash.com/1600x900/?food',
  name: 'Cactus Club Cafe',
  rating: 4,
  time: 20,
  slug: 'cactus-club-cafe'
})
@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {

  city: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.city = params['citySlug']
    })

    this.trendingCarouselConfig.data = this.trending.data;
    this.subscribeToSearchBarInput();
  }

  searchbar = new FormControl('')
  commonIconsUrl = commonIconUrls;
  trendingCarouselConfig: ICarouselConfig = {
    showButtons: true,
    snapWidth: 208,
    data: []
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
      shops: nearbyShops,
    },
    {
      title: 'Other shops in Karnal',
      subtitle: 'These are the ones you\'ll have to put an extra little effort. But totally worth it.',
      shops: otherShops
    },
  ]

  trending = {
    title: 'Trending in your city',
    description: 'Explore the most ordered shops in Karnal',
    data: nearbyShops
  }
  getBtnConfigForShop(shop: any) {
    return {
      ...this.commonShopNowBtnConfig,
      link: '/'
    }
  }
  subscribeToSearchBarInput() {
    this.searchbar.valueChanges
      .pipe(
        debounceTime(100),
      )
      .subscribe((val) => {
        this.data[0].shops = nearbyShops.filter((shop => shop.name.toLowerCase().includes(val.toLowerCase())))
        this.data[1].shops = otherShops.filter((shop => shop.name.toLowerCase().includes(val.toLowerCase())))
      })
  }

  navigateToShopMenu(shop: any) {
    this.router.navigate([shop.slug], {
      relativeTo: this.activatedRoute
    })
  }
}
