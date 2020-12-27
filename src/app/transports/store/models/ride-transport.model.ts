import { ITransport } from './transport.model';

export interface IRideTransport extends ITransport {
  numberOfSeats: number;
  distance: string;
}
