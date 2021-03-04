import { AuthFacade } from '../store/facade/auth.facade';
import { Component } from '@angular/core';
import { IUser } from '../store/models';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  constructor(public authFacade: AuthFacade, private loadingController: LoadingController) {}

  onSubmit(user: IUser): void {
    this.presentLoading();
    this.authFacade.register(user);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
  }
}
