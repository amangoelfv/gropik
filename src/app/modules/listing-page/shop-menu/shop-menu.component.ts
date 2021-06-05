import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShopDetails } from '../interfaces/menu.interface';
import { MenuService } from '../services/menu.service'
@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.scss']
})
export class ShopMenuComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) { }

  shopDetails!: IShopDetails;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.menuService.getShopMenuAndDetails(params.shopSlug).subscribe((data) => {
        this.parseShopData(data);
      })
    })
  }
  parseShopData(shop: any) {
    this.shopDetails = shop.shopDetails;
  }
}
