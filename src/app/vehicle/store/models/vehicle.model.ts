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
  isSmokingAllowed: boolean;
  isFoodAllowed: boolean;
  isDrinkAllowed: boolean;
  isPetAllowed: boolean;
}
