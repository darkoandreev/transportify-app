import { IState } from '../reducers';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class TransportSearchFacade {
  constructor(private store: Store<IState>) {}
}
