import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingPageComponent } from './listing-page.component';
import { ShopMenuComponent } from './shop-menu/shop-menu.component';

const routes: Routes = [
  {
    path: '',
    component: ListingPageComponent
  },
  {
    path:':shopSlug',
    component: ShopMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingPageRoutingModule { }
