import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IShop } from '../interfaces/menu.interface';


const shop: IShop = {
  shopDetails: {
    name: 'Cactus Club Cafe',
    category: 'Confectionary / Packed Foods',
    region: 'Sector 7',
    locality: 'Karnal, Haryana, India',
    timings: '9:00 AM - 2:00 PM',
    images: [
      {
        url: 'https://source.unsplash.com/1600x900/?food'
      }
    ]
  }
}
@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor(
  ) { }

  getShopMenuAndDetails(shopSlug: string) {
    return of(shop).pipe(delay(100))
  }

}
