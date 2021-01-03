import * as fromActions from '../actions/transports.actions';

import { Store, select } from '@ngrx/store';
import {
  getDriveTransport,
  getDriveTransports,
  getRideTransports,
  selectRideTransportById,
} from '../selectors';

import { IApplicant } from '../models/applicant.model';
import { IDriverTransport } from '../models/drive.transport.model';
import { IRideTransport } from '../models/ride-transport.model';
import { IState } from '../reducers';
import { ITransport } from '../models/transport.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransportFacade {
  rideTransports$: Observable<IRideTransport[]> = this.store.pipe(select(getRideTransports));
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
    this.store.dispatch(fromActions.getRideTransport());
  }

  getAllDriveTransports(): void {
    this.store.dispatch(fromActions.getDriveTransports());
  }

  getDriveTransportById(driveTransportId: number): void {
    this.store.dispatch(fromActions.getDriveTransportById({ driveTransportId }));
  }

  getRideTransportById(id: number): Observable<IRideTransport> {
    return this.store.pipe(select(selectRideTransportById(id)));
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
