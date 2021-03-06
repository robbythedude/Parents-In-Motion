import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LandingPage } from '../landing/landing'

/**
 * Generated class for the DriverIntakeConfirmation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-driver-intake-confirmation',
  templateUrl: 'driver-intake-confirmation.html',
})
export class DriverIntakeConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navToLandingPage(){
  	this.navCtrl.push(LandingPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverIntakeConfirmation');
  }

}
