import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeSellerComponent } from './become-seller.component';
import { UiComponentsModule } from '../../ui-components/ui-components.module';



@NgModule({
  declarations: [
    BecomeSellerComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule
  ],
  exports: [
    BecomeSellerComponent
  ]
})
export class BecomeSellerModule { }
