import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverIntakePage } from './driver-intake';

@NgModule({
  declarations: [
    DriverIntakePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverIntakePage),
  ],
  exports: [
    DriverIntakePage
  ]
})
export class DriverIntakeModule {}
