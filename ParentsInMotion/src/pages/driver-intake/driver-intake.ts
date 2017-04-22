import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DriverIntakeConfirmationPage } from '../driver-intake-confirmation/driver-intake-confirmation'

/**
 * Generated class for the DriverIntake page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-driver-intake',
  templateUrl: 'driver-intake.html',
})
export class DriverIntakePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  submitDriverInformation(){	 
  	this.navCtrl.push(DriverIntakeConfirmationPage); 	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverIntake');
  }

}
