import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBComponent } from './feature-b.component';
import { RouterModule } from '@angular/router';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild([{path: '', component: FeatureBComponent}])
   ],
   declarations: [FeatureBComponent]
})
export class FeatureBModule {
}
