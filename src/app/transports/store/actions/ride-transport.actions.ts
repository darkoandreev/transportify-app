import { createAction, props } from '@ngrx/store';

import { IRideTransport } from '../models/ride-transport.model';

// CREATE RIDE TRANSPORT
export const createRideTransport = createAction(
  '[Transports Page] Create ride transport',
  props<{ transport: IRideTransport }>()
);
export const createRideTransportSuccess = createAction(
  '[Transports Page] Create ride transport success',
  props<{ transport: IRideTransport }>()
);
export const createRideTransportFailed = createAction(
  '[Transports Page] Create ride transport failed',
  (error: Error) => ({ error })
);

// GET RIDE TRANSPORTS
export const getRideTransports = createAction('[Transports Page] Get ride transports');
export const getRideTransportsSuccess = createAction(
  '[Transports Page] Get ride transports success',
  props<{ transports: IRideTransport[] }>()
);
export const getTransportsFailed = createAction(
  '[Transports Page] Get ride transports failed',
  (error: Error) => ({ error })
);

// GET RIDE TRANSPORT
export const getRideTransport = createAction(
  '[Transports Page] Get ride transport',
  props<{ rideTransportId: number }>()
);
export const getRideTransportSuccess = createAction(
  '[Transports Page] Get ride transport success',
  props<{ rideTransport: IRideTransport }>()
);
export const getTransportFailed = createAction(
  '[Transports Page] Get ride transport failed',
  (error: Error) => ({ error })
);

// DELETE RIDE TRANSPORT
export const deleteRideTransport = createAction(
  '[Transports Page] Delete ride transport',
  props<{ rideTransportId: number }>()
);
export const deleteRideTransportSuccess = createAction(
  '[Transports Page] Delete ride transport success',
  props<{ rideTransport: IRideTransport }>()
);
export const deleteRideTransportFailed = createAction(
  '[Transports Page] Delete ride transport failed',
  (error: Error) => ({ error })
);
