import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AuthButtonsModule } from '../../app-components/auth-buttons/auth-buttons.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AuthButtonsModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
