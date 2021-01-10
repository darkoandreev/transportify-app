import { HttpClient } from '@angular/common/http';
import { IVehicle } from '../models/vehicle.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class VehicleService {
  constructor(private http: HttpClient) {}

  addVehicle(vehicle: IVehicle): Observable<IVehicle> {
    return this.http.post<IVehicle>(`${environment.API_URL}vehicle`, vehicle, {
      withCredentials: true,
    });
  }

  getVehicles(): Observable<IVehicle[]> {
    return this.http.get<IVehicle[]>(`${environment.API_URL}vehicle`, { withCredentials: true });
  }

  deleteVehicle(vehicleId: number): Observable<void> {
    return this.http.delete<void>(`${environment.API_URL}vehicle/${vehicleId}`, {
      withCredentials: true,
    });
  }

  getVehicle(vehicleId: number): Observable<IVehicle> {
    return this.http.get<IVehicle>(`${environment.API_URL}vehicle/${vehicleId}`, {
      withCredentials: true,
    });
  }

  updateVehicle(vehicle: IVehicle): Observable<IVehicle> {
    return this.http.patch<IVehicle>(`${environment.API_URL}vehicle`, vehicle, {
      withCredentials: true,
    });
  }
}
