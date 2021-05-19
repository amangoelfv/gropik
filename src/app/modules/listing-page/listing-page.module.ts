import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './listing-page.component';
import { ListingPageRoutingModule } from './listing-page.routing';
import { UiComponentsModule } from '../../shared/ui-components/ui-components.module';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { TrendCardComponent } from './trend-card/trend-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BecomeSellerModule } from '../../shared/standalone-components/become-seller/become-seller.module';



@NgModule({
  declarations: [
    ListingPageComponent,
    ShopCardComponent,
    TrendCardComponent,
  ],
  imports: [
    CommonModule,
    ListingPageRoutingModule,
    UiComponentsModule,
    ReactiveFormsModule,
    BecomeSellerModule
  ],

})
export class ListingPageModule { }
