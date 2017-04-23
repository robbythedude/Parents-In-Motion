import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScheduleRidePage } from '../schedule-ride/schedule-ride';

/**
 * Generated class for the KidIntake page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-kid-intake',
  templateUrl: 'kid-intake.html',
})
export class KidIntakePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  submitKidInformation(){
  	this.navCtrl.push(ScheduleRidePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KidIntake');
  }

}
