import { ITransport } from './transport.model';

export interface IDriverTransport extends ITransport {
  moneyCost: number;
}
