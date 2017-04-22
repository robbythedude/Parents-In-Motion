import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DriverIntakePage } from '../driver-intake/driver-intake'
/**
 * Generated class for the Landing page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navDriverIntakePage(){
	this.navCtrl.push(DriverIntakePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Landing');
  }

}
