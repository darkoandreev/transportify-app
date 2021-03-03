import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { IRateUserRequest } from 'src/app/auth/store/models/request/rate-user.request';
import { ModalController } from '@ionic/angular';
import { ProfileRatingModalComponent } from './profile-rating-modal/profile-rating-modal.component';
import { UserRatingFacade } from 'src/app/auth/store/facade/user-rating.facade';

@Component({
  selector: 'app-profile-rating',
  templateUrl: './profile-rating.component.html',
  styleUrls: ['./profile-rating.component.scss'],
})
export class ProfileRatingComponent {
  selectedCardIndex = 0;
  ratedUserId: string;

  constructor(
    public userRatingFacade: UserRatingFacade,
    private modalController: ModalController,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.ratedUserId = this.route.snapshot.paramMap.get('userId');
    this.userRatingFacade.getAll(5, this.ratedUserId);
    this.userRatingFacade.getAllOccurrences(this.ratedUserId);
  }

  ratingCardClicked(index: number, ratingValue: number): void {
    this.selectedCardIndex = index;
    this.userRatingFacade.getAll(ratingValue, this.ratedUserId);
  }

  async openRatingModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: ProfileRatingModalComponent,
      cssClass: 'profile-rating-modal',
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();

    if (!data) {
      return;
    }

    const userRate: IRateUserRequest = {
      ratedUserId: +this.ratedUserId,
      comment: data.comment,
      value: data.currentRate,
    };

    this.userRatingFacade.rateUser(userRate);
  }
}
