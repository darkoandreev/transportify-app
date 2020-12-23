import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'transports.page.html',
  styleUrls: ['transports.page.scss'],
})
export class Tab1Page {
  type = 'drive';

  constructor() {}

  segmentChanged(event): void {
    console.log(event);
  }
}
