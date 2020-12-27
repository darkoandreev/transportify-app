import * as fromActions from '../actions/transports.actions';

import { Action, createReducer, on } from '@ngrx/store';

import { IDriverTransport } from '../models/drive.transport.model';
import { IRideTransport } from '../models/ride-transport.model';
import { ITransport } from '../models/transport.model';

export interface ITransportState {
  error: Error;
  rideTransports: IRideTransport[];
  driveTransports: IDriverTransport[];
}

const initialState: ITransportState = {
  error: null,
  rideTransports: [],
  driveTransports: [],
};

const transportFeatureReducer = createReducer(
  initialState,
  on(fromActions.createRideTransportSuccess, (state, { transport }) => ({
    ...state,
    transport,
  })),
  on(fromActions.createRideTransportFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.getRideTransportSuccess, (state, { transports }) => ({
    ...state,
    rideTransports: transports,
  })),
  on(fromActions.getTransportFailed, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function transportReducer(state: ITransportState | undefined, action: Action) {
  return transportFeatureReducer(state, action);
}
