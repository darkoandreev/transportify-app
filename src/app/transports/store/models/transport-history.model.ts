import { IDriverTransport } from './drive.transport.model';
import { ITransport } from './transport.model';
import { IUser } from 'src/app/auth/store/models';

export interface ITransportHistory extends ITransport {
  transportHistoryDriveDetails: IDriverTransport;
  user: IUser;
  drive: boolean;
}
