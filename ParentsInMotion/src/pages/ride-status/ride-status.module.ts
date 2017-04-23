import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RideStatusPage } from './ride-status';

@NgModule({
  declarations: [
    RideStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(RideStatusPage),
  ],
  exports: [
    RideStatusPage
  ]
})
export class RideStatusModule {}
