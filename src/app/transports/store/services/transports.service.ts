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
    return this.http.post<IRideTransport>(
      `${environment.TRANSPORTIFY_SERVICE_API_URL}ride-transport`,
      transport,
      { withCredentials: true }
    );
  }

  createDriveTransport(transport: IDriverTransport): Observable<IDriverTransport> {
    return this.http.post<IDriverTransport>(
      `${environment.TRANSPORTIFY_SERVICE_API_URL}drive-transport/${transport.vehicleId}`,
      transport,
      { withCredentials: true }
    );
  }

  getAllRideTransports(): Observable<IRideTransport[]> {
    return this.http.get<IRideTransport[]>(
      `${environment.TRANSPORTIFY_SERVICE_API_URL}ride-transport`,
      { withCredentials: true }
    );
  }

  getAllDriveTransports(): Observable<IDriverTransport[]> {
    return this.http.get<IDriverTransport[]>(
      `${environment.TRANSPORTIFY_SERVICE_API_URL}drive-transport`,
      { withCredentials: true }
    );
  }

  getDriveTransportById(driveTransportId: number): Observable<IDriverTransport> {
    return this.http.get<IDriverTransport>(
      `${environment.TRANSPORTIFY_SERVICE_API_URL}drive-transport/${driveTransportId}`
    );
  }

  searchDriveTransports(transport: IRideTransport): Observable<IDriverTransport[]> {
    const params = new HttpParams()
      .set('cityFrom', transport.cityFrom)
      .set('cityTo', transport.cityTo)
      .set('transportDate', String(transport.transportDate))
      .set('numberOfSeats', transport.numberOfSeats.toString());
    return this.http.get<IDriverTransport[]>(
      `${environment.TRANSPORTIFY_SERVICE_API_URL}drive-transport/mapped`,
      { withCredentials: true, params }
    );
  }

  applyForTransport(transport: IDriverTransport): Observable<IApplicant> {
    return this.http.post<IApplicant>(`${environment.TRANSPORTIFY_SERVICE_API_URL}applicant`, {
      driveTransportId: transport.id,
    });
  }

  updateApplicantStatus(applicant: IApplicant): Observable<IApplicant> {
    return this.http.patch<IApplicant>(
      `${environment.TRANSPORTIFY_SERVICE_API_URL}applicant/status/${applicant.id}`,
      applicant
    );
  }
}
