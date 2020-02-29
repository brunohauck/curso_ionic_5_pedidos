import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestaurantPageRoutingModule } from './restaurant-routing.module';
import { RestaurantPage } from './restaurant.page';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantService } from '../api/restaurant.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RestaurantPageRoutingModule
  ],
  declarations: [RestaurantPage],
  providers: [
    RestaurantService
  ]
})
export class RestaurantPageModule {}
