export interface ICity {
  id: number;
  name: string;
  min: number;
  max: number;
  img: string;
  description: string;
  onClose?: (id: number) => void
}

export interface ICityDetails extends ICity {
  wind: number;
  temp: number;
  weather: string;
  clouds: number;
  latitude: number;
  length: number;
}