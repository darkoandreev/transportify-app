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
export const getRideTransport = createAction('[Transports Page] Get ride transport');
export const getRideTransportSuccess = createAction(
  '[Transports Page] Get ride transport success',
  props<{ transports: IRideTransport[] }>()
);
export const getTransportFailed = createAction(
  '[Transports Page] Get ride transport failed',
  (error: Error) => ({ error })
);
