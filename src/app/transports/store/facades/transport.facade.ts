import * as fromActions from '../actions/transports.actions';
import * as fromRideActions from '../actions/ride-transport.actions';
import * as fromRideSelector from '../reducers/ride-transport.reducer';
import * as fromSearchResultActions from '../actions/transport-search.actions';
import * as fromSearchResultSelector from '../reducers/transport-search.reducer';

import { Store, select } from '@ngrx/store';
import { getDriveTransport, getDriveTransports } from '../selectors';

import { IApplicant } from '../models/applicant.model';
import { IDriverTransport } from '../models/drive.transport.model';
import { IRideTransport } from '../models/ride-transport.model';
import { IState } from '../reducers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransportFacade {
  rideTransports$: Observable<IRideTransport[]> = this.store.pipe(select(fromRideSelector.getAll));
  rideTransport$: Observable<IRideTransport> = this.store.pipe(select(fromRideSelector.getOne));

  driveTransports$: Observable<IDriverTransport[]> = this.store.pipe(select(getDriveTransports));
  driveTransport$: Observable<IDriverTransport> = this.store.pipe(select(getDriveTransport));

  searchResults$: Observable<IDriverTransport[]> = this.store.pipe(
    select(fromSearchResultSelector.getAll)
  );

  constructor(private store: Store<IState>) {}

  createRideTransport(transport: IRideTransport): void {
    this.store.dispatch(fromRideActions.createRideTransport({ transport }));
  }

  getAllRideTransports(): void {
    this.store.dispatch(fromRideActions.getRideTransports());
  }

  getRideTransportById(rideTransportId: number): void {
    this.store.dispatch(fromRideActions.getRideTransport({ rideTransportId }));
  }

  deleteRideTransport(rideTransportId: number): void {
    this.store.dispatch(fromRideActions.deleteRideTransport({ rideTransportId }));
  }

  createDriveTransport(transport: IDriverTransport): void {
    this.store.dispatch(fromActions.createDriveTransport({ transport }));
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

  searchDriveTransports(transport: IRideTransport): void {
    this.store.dispatch(fromSearchResultActions.searchDriveTransports({ transport }));
  }

  resetSearchResults(): void {
    this.store.dispatch(fromSearchResultActions.resetSearchResult());
  }

  applyForTransport(transport: IDriverTransport): void {
    this.store.dispatch(fromActions.applyForTransport({ transport }));
  }

  updateApplicantStatus(applicant: IApplicant): void {
    this.store.dispatch(fromActions.updateApplicantStatus({ applicant }));
  }
}
