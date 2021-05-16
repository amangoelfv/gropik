import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ModalComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    ModalComponent
  ]
})
export class UiComponentsModule { }
