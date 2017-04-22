import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverIntakeConfirmationPage } from './driver-intake-confirmation';

@NgModule({
  declarations: [
    DriverIntakeConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverIntakeConfirmationPage),
  ],
  exports: [
    DriverIntakeConfirmationPage
  ]
})
export class DriverIntakeConfirmationModule {}
