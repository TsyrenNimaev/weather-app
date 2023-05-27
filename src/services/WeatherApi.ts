import axios, { AxiosResponse } from 'axios';
import { WeatherData } from '../store/types/types';
import api from '../axios';

export class WeatherApi {
  static getCurrentWeather(city: string): Promise<AxiosResponse<WeatherData>> {
    return api.get<WeatherData>(`/forecast?q=${city}`)
  }
};
