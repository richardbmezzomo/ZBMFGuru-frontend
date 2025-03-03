import { ForecastData } from "./types";

export const mockForecastData: ForecastData[] = [
  {
    _id: "1",
    time: new Date().toISOString(),
    swell: { height: 1.5, direction: 210, period: 12 },
    secondarySwell: { height: 0.8, direction: 190, period: 10 },
    wave: { height: 1.2, direction: 200, period: 11 },
    wind: { direction: 180, speed: 5, wave: { height: 1.0, direction: 190, period: 9 } }
  },
  {
    _id: "2",
    time: new Date().toISOString(),
    swell: { height: 2.0, direction: 220, period: 14 },
    secondarySwell: { height: 1.0, direction: 200, period: 11 },
    wave: { height: 1.5, direction: 210, period: 12 },
    wind: { direction: 170, speed: 4, wave: { height: 1.3, direction: 200, period: 10 } }
  },
  {
    _id: "3",
    time: new Date().toISOString(),
    swell: { height: 1.8, direction: 215, period: 13 },
    secondarySwell: { height: 0.9, direction: 195, period: 10 },
    wave: { height: 1.4, direction: 205, period: 12 },
    wind: { direction: 160, speed: 6, wave: { height: 1.1, direction: 185, period: 8 } }
  }
];
