import { HttpClient } from '@angular/common/http';
import { IVehicle } from '../models/vehicle.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class VehicleService {
  constructor(private http: HttpClient) {}

  addVehicle(vehicle: IVehicle): Observable<IVehicle> {
    return this.http.post<IVehicle>(`${environment.API_URL}vehicle`, vehicle);
  }

  getVehicles(): Observable<IVehicle[]> {
    return this.http.get<IVehicle[]>(`${environment.API_URL}vehicle`);
  }
}
