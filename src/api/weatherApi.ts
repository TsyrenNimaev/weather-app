import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CurrentWeather, ForecastResponse } from './weatherTypes';

// interface WeatherResponse {
//   results: CurrentWeather[];
// }

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<
      CurrentWeather,
      { lat: number; lon: number }
    >({
      query: ({ lat, lon }) => ({
        url: 'weather',
        params: {
          lat,
          lon,
          appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
          units: 'metric',
        },
      }),
    }),
    getForecast: builder.query<ForecastResponse, { lat: number; lon: number }>({
      query: ({ lat, lon }) => ({
        url: 'forecast',
        params: {
          lat,
          lon,
          appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
          units: 'metric',
        },
      }),
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetForecastQuery } = weatherApi;
