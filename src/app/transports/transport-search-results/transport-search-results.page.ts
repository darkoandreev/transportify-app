import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { IRideTransport } from '../store/models/ride-transport.model';
import { Observable } from 'rxjs';
import { TransportFacade } from '../store/facades/transport.facade';

@Component({
  selector: 'app-transport-search-results',
  templateUrl: './transport-search-results.page.html',
  styleUrls: ['./transport-search-results.page.scss'],
})
export class TransportSearchResultsPage {
  rideTransport$: Observable<IRideTransport> = this.transportFacade.rideTransport$;

  constructor(private route: ActivatedRoute, private transportFacade: TransportFacade) {}

  ionViewWillEnter(): void {
    const rideTransportId = +this.route.snapshot.paramMap.get('id');

    if (!rideTransportId) {
      return;
    }

    this.transportFacade.getRideTransportById(rideTransportId);
  }
}
