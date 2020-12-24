import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-transport-details',
  templateUrl: './transport-details.component.html',
  styleUrls: ['./transport-details.component.scss'],
})
export class TransportDetailsComponent implements OnInit {
  type = 'ride';
  constructor(public modalController: ModalController) {}

  ngOnInit() {}
}
