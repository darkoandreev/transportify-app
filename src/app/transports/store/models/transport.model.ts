export interface ITransport {
  id: number;
  cityFrom: string;
  cityTo: string;
  transportDate: Date;
  distance: string;
  drive: boolean;
}
