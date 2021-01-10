import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ITransportState } from '../reducers/transport.reducer';

export const selectTransportState = createFeatureSelector<ITransportState>('transport');

// RIDE TRANSPORTS
const selectRideTransports = createSelector(selectTransportState, (state) => state.rideTransports);
export const getRideTransports = createSelector(selectTransportState, selectRideTransports);

// RIDE TRANSPORT
const selectRideTransport = createSelector(selectTransportState, (state) => state.rideTransport);
export const getRideTransport = createSelector(selectTransportState, selectRideTransport);

// DRIVE TRANSPORTS
const selectDriveTransports = createSelector(
  selectTransportState,
  (state) => state.driveTransports
);
export const getDriveTransports = createSelector(selectTransportState, selectDriveTransports);

// DRIVE TRANSPORT
const selectDriveTransport = createSelector(selectTransportState, (state) => state.driveTransport);
export const getDriveTransport = createSelector(selectTransportState, selectDriveTransport);
