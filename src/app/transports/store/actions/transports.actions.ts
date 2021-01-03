import { ApplicantStatusEnum, IApplicant } from '../models/applicant.model';
import { createAction, props } from '@ngrx/store';

import { IDriverTransport } from '../models/drive.transport.model';
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

// CREATE DRIVE TRANSPORT
export const createDriveTransport = createAction(
  '[Transports Page] Create drive transport',
  props<{ transport: IDriverTransport }>()
);
export const createDriveTransportSuccess = createAction(
  '[Transports Page] Create drive transport success',
  props<{ transport: IDriverTransport }>()
);
export const createDriveTransportFailed = createAction(
  '[Transports Page] Create drive transport failed',
  (error: Error) => ({ error })
);

// GET DRIVE TRANSPORTS
export const getDriveTransports = createAction('[Transports Page] Get drive transports');
export const getDriveTransportSuccess = createAction(
  '[Transports Page] Get drive transports success',
  props<{ transports: IDriverTransport[] }>()
);
export const getDriveTransportFailed = createAction(
  '[Transports Page] Get drive transports failed',
  (error: Error) => ({ error })
);

// GET DRIVE TRANSPORT BY ID
export const getDriveTransportById = createAction(
  '[Transports Page] Get drive transport',
  props<{ driveTransportId: number }>()
);
export const getDriveTransportByIdSuccess = createAction(
  '[Transports Page] Get drive transports success',
  props<{ transport: IDriverTransport }>()
);
export const getDriveTransportByIdFailed = createAction(
  '[Transports Page] Get drive transports failed',
  (error: Error) => ({ error })
);

// SEARCH DRIVE TRANSPORTS
export const searchDriveTransports = createAction(
  '[Transports Page] Search drive transports',
  props<{ transport: IRideTransport }>()
);
export const searchDriveTransportSuccess = createAction(
  '[Transports Page] Search drive transports success',
  props<{ transports: IDriverTransport[] }>()
);
export const searchDriveTransportFailed = createAction(
  '[Transports Page] Search drive transports failed',
  (error: Error) => ({ error })
);

// APPLY FOR TRANSPORT
export const applyForTransport = createAction(
  '[Search Transports Page] Apply for transport',
  props<{ transport: IDriverTransport }>()
);
export const applyForTransportSuccess = createAction(
  '[Search Transports Page] Apply for transport success',
  props<{ applicant: IApplicant }>()
);
export const applyForTransportFailed = createAction(
  '[Search Transports Page] Apply for transport failed',
  (error: Error) => ({ error })
);

// UPDATE APPLICANT STATUS
export const updateApplicantStatus = createAction(
  '[Drive Preview Transport Page] Update applicant status',
  props<{ applicant: IApplicant }>()
);
export const updateApplicantStatusSuccess = createAction(
  '[Drive Preview Transport Page] Update applicant status success',
  props<{ applicant: IApplicant }>()
);
export const updateApplicantStatusFailed = createAction(
  '[Drive Preview Transport Page] Update applicant status failed',
  (error: Error) => ({ error })
);
