import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InnovationPage } from './innovation';

@NgModule({
  declarations: [
    InnovationPage,
  ],
  imports: [
    IonicPageModule.forChild(InnovationPage),
  ],
})
export class InnovationPageModule {}
