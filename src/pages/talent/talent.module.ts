import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TalentPage } from './talent';

@NgModule({
  declarations: [
    TalentPage,
  ],
  imports: [
    IonicPageModule.forChild(TalentPage),
  ],
})
export class TalentPageModule {}
