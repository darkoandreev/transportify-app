export interface IVehicle {
  id: number;
  model: string;
  brand: string;
  image: string;
  color: string;
  yearOfProduction: number;
  numberOfSeats: number;
  hasLuggageSpace: boolean;
  hasAirCondition: boolean;
  smokingAllowed: boolean;
  foodAllowed: boolean;
  drinkAllowed: boolean;
  petAllowed: boolean;
}
