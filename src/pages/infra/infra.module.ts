import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfraPage } from './infra';

@NgModule({
  declarations: [
    InfraPage,
  ],
  imports: [
    IonicPageModule.forChild(InfraPage),
  ],
})
export class InfraPageModule {}
