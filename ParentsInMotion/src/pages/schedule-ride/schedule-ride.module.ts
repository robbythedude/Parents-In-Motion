import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleRidePage } from './schedule-ride';

@NgModule({
  declarations: [
    ScheduleRidePage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleRidePage),
  ],
  exports: [
    ScheduleRidePage
  ]
})
export class ScheduleRideModule {}
