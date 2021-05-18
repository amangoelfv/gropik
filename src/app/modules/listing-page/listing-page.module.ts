import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './listing-page.component';
import { ListingPageRoutingModule } from './listing-page.routing';
import { UiComponentsModule } from 'src/app/shared/ui-components/ui-components.module';
import { ShopCardComponent } from './shop-card/shop-card.component';



@NgModule({
  declarations: [ListingPageComponent, ShopCardComponent],
  imports: [
    CommonModule,
    ListingPageRoutingModule,
    UiComponentsModule
  ]
})
export class ListingPageModule { }
