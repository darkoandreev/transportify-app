import { IUser } from './user.model';

export interface IUserRating {
  id: {
    ratedUser: IUser;
    raterUser: IUser;
  };
  comment: string;
  value: number;
  createdAt: Date;
}
