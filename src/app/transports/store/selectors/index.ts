import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ITransportState } from '../reducers/transport.reducer';

export const selectTransportState = createFeatureSelector<ITransportState>('transport');

const selectRideTransport = createSelector(selectTransportState, (state) => state.rideTransports);
export const getRideTransports = createSelector(selectTransportState, selectRideTransport);
