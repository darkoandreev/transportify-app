import { HttpClient } from '@angular/common/http';
import { IRideTransport } from '../models/ride-transport.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TransportService {
  constructor(private http: HttpClient) {}

  createRideTransport(transport: IRideTransport): Observable<IRideTransport> {
    return this.http.post<IRideTransport>(`${environment.API_URL}ride-transport`, transport);
  }

  getAllRideTransports(): Observable<IRideTransport[]> {
    return this.http.get<IRideTransport[]>(`${environment.API_URL}ride-transport`);
  }
}
