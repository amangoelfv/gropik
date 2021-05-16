import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './listing-page.component';
import { ListingPageRoutingModule } from './listing-page.routing';



@NgModule({
  declarations: [ListingPageComponent],
  imports: [
    CommonModule,
    ListingPageRoutingModule
  ]
})
export class ListingPageModule { }
