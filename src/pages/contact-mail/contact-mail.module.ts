import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactMailPage } from './contact-mail';

@NgModule({
  declarations: [
    ContactMailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactMailPage),
  ],
  exports: [
    ContactMailPage
  ]
})
export class ContactMailPageModule {}
