export interface Swell {
  direction: number;
  height: number;
  period: number;
}

export interface Wave {
  direction: number;
  height: number;
  period: number;
}

export interface Wind {
  direction: number;
  speed: number;
  wave?: Wave;
}

export interface ForecastData {
  _id: string;
  time: string;
  secondarySwell: Swell;
  swell: Swell;
  wave: Wave;
  wind: Wind;
}
