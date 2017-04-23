import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecretCodePage } from './secret-code';

@NgModule({
  declarations: [
    SecretCodePage,
  ],
  imports: [
    IonicPageModule.forChild(SecretCodePage),
  ],
  exports: [
    SecretCodePage
  ]
})
export class SecretCodeModule {}
