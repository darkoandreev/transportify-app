import * as fromActions from '../actions/transports.actions';

import { Store, select } from '@ngrx/store';
import {
  getDriveTransport,
  getDriveTransports,
  getRideTransport,
  getRideTransports,
} from '../selectors';

import { IApplicant } from '../models/applicant.model';
import { IDriverTransport } from '../models/drive.transport.model';
import { IRideTransport } from '../models/ride-transport.model';
import { IState } from '../reducers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransportFacade {
  rideTransports$: Observable<IRideTransport[]> = this.store.pipe(select(getRideTransports));
  rideTransport$: Observable<IRideTransport> = this.store.pipe(select(getRideTransport));

  driveTransports$: Observable<IDriverTransport[]> = this.store.pipe(select(getDriveTransports));
  driveTransport$: Observable<IDriverTransport> = this.store.pipe(select(getDriveTransport));

  constructor(private store: Store<IState>) {}

  createRideTransport(transport: IRideTransport): void {
    this.store.dispatch(fromActions.createRideTransport({ transport }));
  }

  createDriveTransport(transport: IDriverTransport): void {
    this.store.dispatch(fromActions.createDriveTransport({ transport }));
  }

  getAllRideTransports(): void {
    this.store.dispatch(fromActions.getRideTransports());
  }

  getAllDriveTransports(): void {
    this.store.dispatch(fromActions.getDriveTransports());
  }

  getDriveTransportById(driveTransportId: number): void {
    this.store.dispatch(fromActions.getDriveTransportById({ driveTransportId }));
  }

  deleteDriveTransport(driveTransportId: number): void {
    this.store.dispatch(fromActions.deleteDriveTransport({ driveTransportId }));
  }

  getRideTransportById(rideTransportId: number): void {
    this.store.dispatch(fromActions.getRideTransport({ rideTransportId }));
  }

  deleteRideTransport(rideTransportId: number): void {
    this.store.dispatch(fromActions.deleteRideTransport({ rideTransportId }));
  }

  searchDriveTransports(transport: IRideTransport): void {
    this.store.dispatch(fromActions.searchDriveTransports({ transport }));
  }

  applyForTransport(transport: IDriverTransport): void {
    this.store.dispatch(fromActions.applyForTransport({ transport }));
  }

  updateApplicantStatus(applicant: IApplicant): void {
    this.store.dispatch(fromActions.updateApplicantStatus({ applicant }));
  }
}
