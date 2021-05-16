import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
export interface IBtnConfig {
  type?: IBtnTypes;
  text: string;
  fill?: string;
  textColor?: string;
  link?: string;
  disabled?: boolean;
  showLoader?: boolean;
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

  @Output() clicked = new EventEmitter<boolean>(false)
  buttonTypes = IBtnTypes;

  ngOnInit(): void {
    this.renderConfig();
  }

  label: string = '';
  ngOnChanges() {
    if (this.config.showLoader) {
      console.log("hello")
      this.cssClasses += 'disabled';
      this.config.text = 'Please wait';
      this.label = 'Please wait'
    } else {
      this.cssClasses += 'enabled'
      this.label = this.config.text;

    }
  }

  cssClasses: string = '';
  renderConfig() {
    this.label = this.config.text;
    this.cssClasses += this.config.disabled ? 'disabled ' : 'enabled ';

  }
  onClickBtn() {
    if (!this.config.disabled && !this.config.showLoader) {
      this.clicked.emit(true);
      if (this.config.link) {
        this.router.navigate([this.config.link]);
      }
    }
  }


}
