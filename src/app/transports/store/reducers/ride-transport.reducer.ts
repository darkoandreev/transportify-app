import * as fromActions from '../actions/ride-transport.actions';

import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { IRideTransport } from '../models/ride-transport.model';
import { IState } from '.';

export interface IRideTransportState extends EntityState<IRideTransport> {
  error?: Error;
  selectedRideTransport: IRideTransport;
}

export const adapter: EntityAdapter<IRideTransport> = createEntityAdapter<IRideTransport>({
  selectId: (transport) => transport.id,
});

const initialState: IRideTransportState = adapter.getInitialState({
  selectedRideTransport: null,
});

const featureReducer = createReducer(
  initialState,
  on(fromActions.createRideTransportSuccess, (state, { transport }) =>
    adapter.addOne(transport, state)
  ),
  on(fromActions.createRideTransportFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.deleteRideTransportSuccess, (state, { rideTransport }) =>
    adapter.removeOne(rideTransport.id, state)
  ),
  on(fromActions.getRideTransportsSuccess, (state, { transports }) =>
    adapter.setAll(transports, state)
  ),
  on(fromActions.getRideTransportSuccess, (state, { rideTransport }) => ({
    ...state,
    selectedRideTransport: rideTransport,
  })),
  on(fromActions.getTransportFailed, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function rideTransportSearchReducer(state: IRideTransportState | undefined, action: Action) {
  return featureReducer(state, action);
}

const selectState = createFeatureSelector<IState>('transport');

const selectRideTransportState = createSelector(selectState, (state) => state.rideTransport);

const { selectAll } = adapter.getSelectors(selectRideTransportState);

export const getAll = selectAll;
export const getOne = createSelector(
  selectRideTransportState,
  (state) => state.selectedRideTransport
);
