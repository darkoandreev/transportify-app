import * as fromActions from '../actions/transports.actions';

import { Store, select } from '@ngrx/store';

import { IRideTransport } from '../models/ride-transport.model';
import { IState } from '../reducers';
import { ITransport } from '../models/transport.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getRideTransports } from '../selectors';

@Injectable({ providedIn: 'root' })
export class TransportFacade {
  rideTransports$: Observable<ITransport[]> = this.store.pipe(select(getRideTransports));

  constructor(private store: Store<IState>) {}

  createRideTransport(transport: IRideTransport): void {
    this.store.dispatch(fromActions.createRideTransport({ transport }));
  }

  getAllRideTransports(): void {
    this.store.dispatch(fromActions.getRideTransport());
  }
}
