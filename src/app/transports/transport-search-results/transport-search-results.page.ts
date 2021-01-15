import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { IRideTransport } from '../store/models/ride-transport.model';
import { TransportFacade } from '../store/facades/transport.facade';

@Component({
  selector: 'app-transport-search-results',
  templateUrl: './transport-search-results.page.html',
  styleUrls: ['./transport-search-results.page.scss'],
})
export class TransportSearchResultsPage {
  rideTransport: Partial<IRideTransport>;

  constructor(private route: ActivatedRoute, private transportFacade: TransportFacade) {}

  ionViewWillEnter(): void {
    const rideTransportParams = this.route.snapshot?.queryParams;
    if (Object.keys(rideTransportParams).length > 0) {
      this.rideTransport = this.route.snapshot.queryParams;
    }
  }

  ionViewWillLeave(): void {
    this.transportFacade.resetSearchResults();
  }
}
