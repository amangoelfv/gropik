import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLocationComponent } from './select-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SelectLocationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    ],
  exports: [
    SelectLocationComponent
  ]
})
export class SelectLocationModule { }
