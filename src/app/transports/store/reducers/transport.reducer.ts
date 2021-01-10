import * as fromActions from '../actions/transports.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { ApplicantStatusEnum, IApplicant } from '../models/applicant.model';

import { IDriverTransport } from '../models/drive.transport.model';
import { IRideTransport } from '../models/ride-transport.model';
import produce from 'immer';

export interface ITransportState {
  error: Error;
  rideTransports: IRideTransport[];
  rideTransport: IRideTransport;
  driveTransports: IDriverTransport[];
  driveTransport: IDriverTransport;
}

const initialState: ITransportState = {
  error: null,
  rideTransports: [],
  rideTransport: null,
  driveTransports: [],
  driveTransport: null,
};

const transportFeatureReducer = createReducer(
  initialState,
  on(fromActions.createRideTransportSuccess, (state, { transport }) => ({
    ...state,
    rideTransports: [...state.rideTransports, transport],
  })),
  on(fromActions.createRideTransportFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.deleteRideTransportSuccess, (state, { rideTransport }) => ({
    ...state,
    rideTransports: state.rideTransports.filter((transport) => transport.id !== rideTransport.id),
  })),
  on(fromActions.createDriveTransportSuccess, (state, { transport }) => ({
    ...state,
    driveTransports: [...state.driveTransports, transport],
  })),
  on(fromActions.createDriveTransportFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.getRideTransportsSuccess, (state, { transports }) => ({
    ...state,
    rideTransports: transports,
  })),
  on(fromActions.getRideTransportSuccess, (state, { rideTransport }) => ({
    ...state,
    rideTransport,
  })),
  on(fromActions.getTransportFailed, (state, { error }) => ({
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
  on(fromActions.searchDriveTransportSuccess, (state, { transports }) => ({
    ...state,
    driveTransports: transports,
  })),
  on(fromActions.searchDriveTransportFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.applyForTransportSuccess, (state, { applicant }) => {
    return produce(state, (draftState) => {
      const driveTransport =
        draftState.driveTransports[
          draftState.driveTransports.findIndex((d) => d.id === applicant.driveTransportId)
        ];
      driveTransport.applicants.push(applicant);
      if (applicant.applicantStatus === ApplicantStatusEnum.ACCEPTED) {
        driveTransport.availableSeats -= 1;
      } else if (applicant.applicantStatus === ApplicantStatusEnum.REJECTED) {
        driveTransport.availableSeats += 1;
      }
    });
  }),
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
