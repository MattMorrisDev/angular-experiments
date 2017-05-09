import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// The above line will bring everything but NgbModal and NgbTooltip into the FeatureA bundle
import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';

@Component({
   selector: 'app-feature-a',
   template: `
       <div ngbTooltip="tooltipp!">Feature A</div>
       <button (click)="openDynamicModalComponent()">Open Modal</button>
   `
})
export class FeatureAComponent implements OnInit {

   constructor(private modalService: NgbModal) {
   }

   ngOnInit() {
   }

   openDynamicModalComponent() {
      this.modalService.open(DynamicModalComponent);
   }

}
