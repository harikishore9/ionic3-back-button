import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactLinkedinPage } from './contact-linkedin';

@NgModule({
  declarations: [
    ContactLinkedinPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactLinkedinPage),
  ],
  exports: [
    ContactLinkedinPage
  ]
})
export class ContactLinkedinPageModule {}
