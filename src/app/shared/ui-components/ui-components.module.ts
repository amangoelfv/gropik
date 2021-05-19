import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { LoaderComponent } from './loader/loader.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ModalComponent,
    LoaderComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    ModalComponent,
    LoaderComponent,
    CarouselComponent
  ]
})
export class UiComponentsModule { }
