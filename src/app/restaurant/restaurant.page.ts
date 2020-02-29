import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../api/restaurant.service';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { Restaurant } from '../models/restaurant/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  restaurants: Restaurant[];
  loading: any;
  constructor( 
    private service: RestaurantService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public alertController: AlertController) { 
    console.log('Entrou no Component');
  }

  ngOnInit() {
    this.getRestaurantes();
  }

  getRestaurantes(): void {
    this.presentLoading().then(()=>{this.service.getRestaurantes()
        .subscribe(
          restaurantes =>{      
            this.restaurants = restaurantes;
            console.log(this.restaurants);
            this.loadingController.dismiss(null, undefined);
          },
          error => {
            this.loadingController.dismiss(null, undefined);
            this.presentAlert("Ocorreu algum erro.")
          } );
        });     
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading',
      duration: 2000
    });
    await this.loading.present();
  }
  async presentAlert(msg:string) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

}
