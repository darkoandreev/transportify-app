import { IApplicant } from './applicant.model';
import { ITransport } from './transport.model';
import { IUser } from 'src/app/auth/store/models';
import { IVehicle } from 'src/app/vehicle/store/models/vehicle.model';

export interface IDriverTransport extends ITransport {
  transportTime: string;
  transportPrice: number;
  availableSeats: number;
  additionalDetails: string;
  vehicleId?: number;
  vehicle?: IVehicle;
  user?: IUser;
  applicants: IApplicant[];
  distance: string;
}
