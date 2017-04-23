import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectAddressPage } from './collect-address';

@NgModule({
  declarations: [
    CollectAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectAddressPage),
  ],
  exports: [
    CollectAddressPage
  ]
})
export class CollectAddressModule {}
