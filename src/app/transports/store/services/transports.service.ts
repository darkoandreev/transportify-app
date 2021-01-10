import { ApplicantStatusEnum, IApplicant } from '../models/applicant.model';
import { HttpClient, HttpParams } from '@angular/common/http';

import { IDriverTransport } from '../models/drive.transport.model';
import { IRideTransport } from '../models/ride-transport.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TransportService {
  constructor(private http: HttpClient) {}

  createRideTransport(transport: IRideTransport): Observable<IRideTransport> {
    return this.http.post<IRideTransport>(`${environment.API_URL}ride-transport`, transport, {
      withCredentials: true,
    });
  }

  createDriveTransport(transport: IDriverTransport): Observable<IDriverTransport> {
    return this.http.post<IDriverTransport>(
      `${environment.API_URL}drive-transport/${transport.vehicleId}`,
      transport,
      { withCredentials: true }
    );
  }

  getAllRideTransports(): Observable<IRideTransport[]> {
    return this.http.get<IRideTransport[]>(`${environment.API_URL}ride-transport`, {
      withCredentials: true,
    });
  }

  getRideTransportById(rideTransportId: number): Observable<IRideTransport> {
    return this.http.get<IRideTransport>(
      `${environment.API_URL}ride-transport/${rideTransportId}`,
      { withCredentials: true }
    );
  }

  deleteRideTransport(rideTransportId: number): Observable<IRideTransport> {
    return this.http.delete<IRideTransport>(
      `${environment.API_URL}ride-transport/${rideTransportId}`,
      { withCredentials: true }
    );
  }

  getAllDriveTransports(): Observable<IDriverTransport[]> {
    return this.http.get<IDriverTransport[]>(`${environment.API_URL}drive-transport`, {
      withCredentials: true,
    });
  }

  getDriveTransportById(driveTransportId: number): Observable<IDriverTransport> {
    return this.http.get<IDriverTransport>(
      `${environment.API_URL}drive-transport/${driveTransportId}`
    );
  }

  deleteDriveTransport(driveTransportId: number): Observable<IDriverTransport> {
    return this.http.delete<IDriverTransport>(
      `${environment.API_URL}drive-transport/${driveTransportId}`,
      { withCredentials: true }
    );
  }

  searchDriveTransports(transport: IRideTransport): Observable<IDriverTransport[]> {
    const params = new HttpParams()
      .set('cityFrom', transport.cityFrom)
      .set('cityTo', transport.cityTo)
      .set('transportDate', String(transport.transportDate));
    return this.http.get<IDriverTransport[]>(`${environment.API_URL}drive-transport/search`, {
      withCredentials: true,
      params,
    });
  }

  applyForTransport(transport: IDriverTransport): Observable<IApplicant> {
    return this.http.post<IApplicant>(
      `${environment.API_URL}applicant`,
      {
        driveTransportId: transport.id,
      },
      { withCredentials: true }
    );
  }

  updateApplicantStatus(applicant: IApplicant): Observable<IApplicant> {
    return this.http.patch<IApplicant>(
      `${environment.API_URL}applicant/status/${applicant.id}`,
      applicant,
      { withCredentials: true }
    );
  }
}
