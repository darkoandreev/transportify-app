import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ITransportState } from '../reducers/transport.reducer';

export const selectTransportState = createFeatureSelector<ITransportState>('transport');

// RIDE TRANSPORTS
const selectRideTransport = createSelector(selectTransportState, (state) => state.rideTransports);
export const getRideTransports = createSelector(selectTransportState, selectRideTransport);

// DRIVE TRANSPORTS
const selectDriveTransports = createSelector(
  selectTransportState,
  (state) => state.driveTransports
);
export const getDriveTransports = createSelector(selectTransportState, selectDriveTransports);

// DRIVE TRANSPORT
const selectDriveTransport = createSelector(selectTransportState, (state) => state.driveTransport);

const getRideTransportById = (id: number) =>
  createSelector(selectRideTransport, (transports) => transports.find((x) => x.id === id));

export const selectRideTransportById = (id: number) =>
  createSelector(selectTransportState, getRideTransportById(id));

export const getDriveTransport = createSelector(selectTransportState, selectDriveTransport);
