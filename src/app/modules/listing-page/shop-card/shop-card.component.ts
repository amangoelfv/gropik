import { Component, Input, OnInit } from '@angular/core';
import { AppColors } from '../../../shared/constants/colors';
import { IBtnConfig } from '../../../shared/ui-components/button/button.component';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  @Input() shop: any;
  constructor() { }
  ngOnInit(): void {
  }

}
