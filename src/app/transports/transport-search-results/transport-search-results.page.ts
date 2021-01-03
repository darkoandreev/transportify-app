import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IRideTransport } from '../store/models/ride-transport.model';
import { IState } from '../store/reducers';
import { Observable } from 'rxjs';
import { TransportFacade } from '../store/facades/transport.facade';
import { selectRideTransportById } from '../store/selectors';

@Component({
  selector: 'app-transport-search-results',
  templateUrl: './transport-search-results.page.html',
  styleUrls: ['./transport-search-results.page.scss'],
})
export class TransportSearchResultsPage implements OnInit {
  rideTransport$: Observable<IRideTransport>;

  constructor(private route: ActivatedRoute, private transportFacade: TransportFacade) {}

  ngOnInit() {
    const rideTransportId = +this.route.snapshot.paramMap.get('id');

    if (!rideTransportId) {
      return;
    }

    this.rideTransport$ = this.transportFacade.getRideTransportById(rideTransportId);
  }
}
