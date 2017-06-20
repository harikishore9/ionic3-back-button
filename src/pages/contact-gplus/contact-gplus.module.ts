import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactGplusPage } from './contact-gplus';

@NgModule({
  declarations: [
    ContactGplusPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactGplusPage),
  ],
  exports: [
    ContactGplusPage
  ]
})
export class ContactGplusPageModule {}
