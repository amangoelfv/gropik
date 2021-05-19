import { Component, Input, OnInit } from '@angular/core';
import { CommonImagesUrl } from '../../../../../assets/images/ImagesUrl';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  @Input() config: any;
  constructor() { }
  ImagesUrl = CommonImagesUrl;
  ngOnInit(): void {
  }

}
