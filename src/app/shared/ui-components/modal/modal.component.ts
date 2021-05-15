import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private renderer: Renderer2) {

  }
  @Input() templateRef: any;
  @ViewChild('template') modal!: ElementRef;
  modalVisible: boolean = false;
  ngOnInit(): void {

  }

  cssClasses = 'modal show'
  showModal() {
    this.cssClasses = 'modal show';
  }

  closeModal() {
    this.cssClasses = 'modal hide';
    this.modalVisible = false;
  }

}
