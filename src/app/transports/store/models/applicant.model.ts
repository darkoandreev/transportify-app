import { IRideTransport } from './ride-transport.model';
import { IUser } from 'src/app/auth/store/models';

export interface IApplicant {
  id: number;
  startDate: Date;
  applicantStatus: ApplicantStatusEnum;
  driveTransportId: number;
  rider: IUser;
}

export enum ApplicantStatusEnum {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  CANCELED = 'CANCELED',
}
