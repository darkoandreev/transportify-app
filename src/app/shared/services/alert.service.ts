import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(private alertController: AlertController) {}

  async confirmAlert(header: string, message: string, callback = (): void => {}) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => callback(),
        },
      ],
    });

    await alert.present();
  }
}
