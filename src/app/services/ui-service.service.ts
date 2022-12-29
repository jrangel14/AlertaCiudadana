import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UiServiceService {
  constructor(private alertCtrl: AlertController) {}

  async alertaInformativa(message: string) {
    const alert = await this.alertCtrl.create({
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
