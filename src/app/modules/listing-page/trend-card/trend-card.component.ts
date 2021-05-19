import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend-card',
  templateUrl: './trend-card.component.html',
  styleUrls: ['./trend-card.component.scss']
})
export class TrendCardComponent implements OnInit {

  constructor() { }

  @Input() config: any;
  ngOnInit(): void {
  }

}
