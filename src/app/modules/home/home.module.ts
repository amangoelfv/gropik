import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { UiComponentsModule } from '../../shared/ui-components/ui-components.module';
import { SelectLocationModule } from '../../shared/app-components/select-location/select-location.module';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { AuthModule } from '../auth/auth.module';
import { BecomeSellerModule } from '../../shared/standalone-components/become-seller/become-seller.module';



@NgModule({
  declarations: [
    HomeComponent,
    FeatureCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SelectLocationModule,
    UiComponentsModule,
    AuthModule,
    BecomeSellerModule
  ]
})
export class HomeModule { }
