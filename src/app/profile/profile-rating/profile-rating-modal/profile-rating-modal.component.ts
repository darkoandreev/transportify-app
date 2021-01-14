import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-rating-modal',
  templateUrl: './profile-rating-modal.component.html',
  styleUrls: ['./profile-rating-modal.component.scss'],
})
export class ProfileRatingModalComponent {
  currentRate: number;
  comment: string;

  constructor(private modalController: ModalController) {}

  rate(): void {
    this.modalController.dismiss({ currentRate: this.currentRate, comment: this.comment });
  }
}
