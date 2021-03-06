import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FoundRidePage } from '../found-ride/found-ride';

/**
 * Generated class for the CollectAddress page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-collect-address',
  templateUrl: 'collect-address.html',
})
export class CollectAddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  findRide(){
  	this.navCtrl.push(FoundRidePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectAddress');
  }

}
