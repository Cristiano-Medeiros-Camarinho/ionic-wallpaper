import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NaturezaPage } from './natureza';

@NgModule({
  declarations: [
    NaturezaPage,
  ],
  imports: [
    IonicPageModule.forChild(NaturezaPage),
  ],
})
export class NaturezaPageModule {}
