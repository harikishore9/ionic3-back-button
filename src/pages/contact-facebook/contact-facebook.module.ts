import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactFacebookPage } from './contact-facebook';

@NgModule({
  declarations: [
    ContactFacebookPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactFacebookPage),
  ],
  exports: [
    ContactFacebookPage
  ]
})
export class ContactFacebookPageModule {}
