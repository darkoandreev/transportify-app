import { ApplicantStatusEnum, IApplicant } from '../models/applicant.model';
import { createAction, props } from '@ngrx/store';

import { IDriverTransport } from '../models/drive.transport.model';
import { IRideTransport } from '../models/ride-transport.model';

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

// DELETE DRIVE TRANSPORT
export const deleteDriveTransport = createAction(
  '[Transports Page] Delete drive transport',
  props<{ driveTransportId: number }>()
);
export const deleteDriveTransportSuccess = createAction(
  '[Transports Page] Delete drive transport success',
  props<{ driveTransport: IRideTransport }>()
);
export const deleteDriveTransportFailed = createAction(
  '[Transports Page] Delete drive transport failed',
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
