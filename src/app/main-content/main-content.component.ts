import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent implements OnInit {
  constructor(private modalService: NgbModal) { }
  ngOnInit() {
  }

  modalReference: NgbModalRef;

  openModal(content) {
    this.modalReference = this.modalService.open(content);
  }

  closeModal(){
    this.modalReference.close();
  }



}
