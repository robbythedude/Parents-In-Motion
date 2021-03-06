import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RideStatusPage } from '../ride-status/ride-status';

/**
 * Generated class for the FoundRide page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-found-ride',
  templateUrl: 'found-ride.html',
})
export class FoundRidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navRideStatus(){
  	this.navCtrl.push(RideStatusPage)
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoundRide');
  }

}
