import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAComponent } from './feature-a.component';
import { RouterModule } from '@angular/router';
import { NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';

@NgModule({
   imports: [
      CommonModule,
      NgbModalModule,
      NgbTooltipModule,
      RouterModule.forChild([{path: '', component: FeatureAComponent}])
   ],
   declarations: [FeatureAComponent, DynamicModalComponent],
   entryComponents: [DynamicModalComponent]
})
export class FeatureAModule {
}
