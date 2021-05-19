import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonsComponent } from './auth-buttons.component';
import { UiComponentsModule } from '../../ui-components/ui-components.module';
import { AuthModule } from '../../../modules/auth/auth.module';



@NgModule({
  declarations: [AuthButtonsComponent],
  imports: [
    CommonModule,
    UiComponentsModule,
    AuthModule
  ],
  exports: [
    AuthButtonsComponent
  ]
})
export class AuthButtonsModule { }
