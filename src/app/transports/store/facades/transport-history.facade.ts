import * as fromActions from '../actions/transport-history.actions';
import * as fromReducer from '../reducers/transport-history.reducer';

import { Store, select } from '@ngrx/store';

import { IState } from '../reducers';
import { ITransport } from '../models/transport.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransportHistoryFacade {
  transportHistory$: Observable<ITransport[]> = this.store.pipe(select(fromReducer.getAll));

  constructor(private store: Store<IState>) {}

  getAll(): void {
    this.store.dispatch(fromActions.getTransportHistory());
  }
}
