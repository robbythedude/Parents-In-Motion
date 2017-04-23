import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CollectAddressPage } from '../collect-address/collect-address';

/**
 * Generated class for the ScheduleRide page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-schedule-ride',
  templateUrl: 'schedule-ride.html',
})
export class ScheduleRidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navScheduleNowPage(){
  	this.navCtrl.push(CollectAddressPage);
  }

  navScheduleLaterPage(){
  	this.navCtrl.push(CollectAddressPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleRide');
  }

}
