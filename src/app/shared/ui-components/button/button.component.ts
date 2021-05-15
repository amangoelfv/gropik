import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
export interface IBtnConfig {
  type?: IBtnTypes;
  text: string;
  fill?: string;
  textColor?: string;
  link?: string;
}
export enum IBtnTypes {
  PRIMARY = 'primary',
  TEXT = 'text',
  OUTLINE = 'outline'
}
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(private router: Router) { }
  @Input()
  config!: IBtnConfig;

  @Output() click = new EventEmitter<boolean>(false)
  buttonTypes = IBtnTypes;

  ngOnInit(): void {

  }

  onClickBtn() {
    this.click.emit(true);

    if (this.config.link) {
      this.router.navigate([this.config.link])
    }
  }

}
