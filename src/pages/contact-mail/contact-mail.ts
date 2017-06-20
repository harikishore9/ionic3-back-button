import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ContactMailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact-mail',
  templateUrl: 'contact-mail.html',
})
export class ContactMailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactMailPage');
  }

    dismiss() {
    this.viewCtrl.dismiss();
  }

}
