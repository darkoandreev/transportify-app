import { ITransport } from './transport.model';

export interface IRideTransport extends ITransport {
  distance: string;
}
