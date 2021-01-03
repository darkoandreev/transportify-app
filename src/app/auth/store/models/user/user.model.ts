import { GenderEnum } from '../../enums';

export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: GenderEnum;
  phoneNumber: string;
  registeredOn?: Date;
  lastSeen?: Date;
  imageUrl: string;
}
