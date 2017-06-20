import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  showMail() {
    let modalCtrl = this.modalCtrl.create("ContactMailPage");
    modalCtrl.present();
  }
}
