import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ITransportState } from '../reducers/transport.reducer';

export const selectTransportState = createFeatureSelector<ITransportState>('transport');

// DRIVE TRANSPORTS
const selectDriveTransports = createSelector(
  selectTransportState,
  (state) => state.driveTransports
);
export const getDriveTransports = createSelector(selectTransportState, selectDriveTransports);

// DRIVE TRANSPORT
const selectDriveTransport = createSelector(selectTransportState, (state) => state.driveTransport);
export const getDriveTransport = createSelector(selectTransportState, selectDriveTransport);
