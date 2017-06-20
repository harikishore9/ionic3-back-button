import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutOrgPage } from './about-org';

@NgModule({
  declarations: [
    AboutOrgPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutOrgPage),
  ],
  exports: [
    AboutOrgPage
  ]
})
export class AboutOrgPageModule {}
