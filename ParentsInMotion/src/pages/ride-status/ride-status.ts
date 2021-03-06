import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SecretCodePage } from '../secret-code/secret-code';

/**
 * Generated class for the RideStatus page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ride-status',
  templateUrl: 'ride-status.html',
})
export class RideStatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navSecretCode(){
  	this.navCtrl.push(SecretCodePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RideStatus');
  }

}
