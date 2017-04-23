import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidIntakePage } from './kid-intake';

@NgModule({
  declarations: [
    KidIntakePage,
  ],
  imports: [
    IonicPageModule.forChild(KidIntakePage),
  ],
  exports: [
    KidIntakePage
  ]
})
export class KidIntakeModule {}
