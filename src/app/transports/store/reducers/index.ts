import * as fromRideTransport from './ride-transport.reducer';
import * as fromSearchResults from './transport-search.reducer';
import * as fromTransport from './transport.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface IState {
  readonly transport: fromTransport.ITransportState;
  readonly searchResults: fromSearchResults.ITransportSearchResultState;
  readonly rideTransport: fromRideTransport.IRideTransportState;
}

export const reducerMap: ActionReducerMap<IState> = {
  transport: fromTransport.transportReducer,
  searchResults: fromSearchResults.transportSearchReducer,
  rideTransport: fromRideTransport.rideTransportSearchReducer,
};
