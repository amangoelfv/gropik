import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiComponentsModule } from 'src/app/shared/ui-components/ui-components.module';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiComponentsModule
  ],
  exports: [
    LoginComponent, SignupComponent
  ]
})
export class AuthModule { }
