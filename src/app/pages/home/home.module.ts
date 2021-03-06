import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from '../../../../../crud-ui/src/app/pages/home/home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
