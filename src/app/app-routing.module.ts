import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: '',
      children: []
   },
   {
      path: 'feature-a',
      loadChildren: './modules/feature-a/feature-a.module#FeatureAModule'
   },
   {
      path: 'feature-b',
      loadChildren: './modules/feature-b/feature-b.module#FeatureBModule'
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {
}
