import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoundRidePage } from './found-ride';

@NgModule({
  declarations: [
    FoundRidePage,
  ],
  imports: [
    IonicPageModule.forChild(FoundRidePage),
  ],
  exports: [
    FoundRidePage
  ]
})
export class FoundRideModule {}
