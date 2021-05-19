import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
export interface ICarouselConfig {
  snapWidth: number;
  showButtons?: boolean;
  data: any[];
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() config!: ICarouselConfig;
  @Input() carouselItemTemplate!: any;
  ngOnInit(): void {
  }
  @ViewChild('carousel') car!: ElementRef

  slickNext() {
    this.car.nativeElement.scrollBy({
      left: this.config.snapWidth, behavior: 'smooth'

    });
  }
  slickPrev() {
    this.car.nativeElement.scrollBy({
      left: -this.config.snapWidth, behavior: 'smooth'

    });
  }
}
