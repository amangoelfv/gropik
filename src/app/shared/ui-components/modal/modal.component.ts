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
    document.addEventListener('keyup', (event) => {
      if (this.modalVisible && event.key === "Escape") {
        this.closeModal();
      }
    })
  }

  cssClasses = 'modal hide'
  showModal() {
    this.cssClasses = 'modal show';
    this.modalVisible = true;
  }

  closeModal() {
    this.cssClasses = 'modal hide';
    this.modalVisible = false;
  }

}
