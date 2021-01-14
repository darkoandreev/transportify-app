import * as fromActions from '../actions/transports.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { ApplicantStatusEnum, IApplicant } from '../models/applicant.model';

import { IDriverTransport } from '../models/drive.transport.model';
import { IRideTransport } from '../models/ride-transport.model';
import produce from 'immer';

export interface ITransportState {
  error: Error;
  driveTransports: IDriverTransport[];
  driveTransport: IDriverTransport;
}

const initialState: ITransportState = {
  error: null,
  driveTransports: [],
  driveTransport: null,
};

const transportFeatureReducer = createReducer(
  initialState,
  on(fromActions.createDriveTransportSuccess, (state, { transport }) => ({
    ...state,
    driveTransports: [...state.driveTransports, transport],
  })),
  on(fromActions.createDriveTransportFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.getDriveTransportSuccess, (state, { transports }) => ({
    ...state,
    driveTransports: transports,
  })),
  on(fromActions.getDriveTransportFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.deleteDriveTransportSuccess, (state, { driveTransport }) => ({
    ...state,
    driveTransports: state.driveTransports.filter(
      (transport) => transport.id !== driveTransport.id
    ),
  })),
  on(fromActions.getDriveTransportByIdSuccess, (state, { transport }) => ({
    ...state,
    driveTransport: transport,
  })),
  on(fromActions.updateApplicantStatusSuccess, (state, { applicant }) => {
    return produce(state, (draftState) => {
      const foundApplicant: IApplicant = draftState.driveTransport.applicants.find(
        (appl) => appl.id === applicant.id
      );
      foundApplicant.applicantStatus = applicant.applicantStatus;
    });
  })
);

export function transportReducer(state: ITransportState | undefined, action: Action) {
  return transportFeatureReducer(state, action);
}
