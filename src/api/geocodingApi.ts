import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GeocodingResult } from './weatherTypes';

// interface GeocodingResponse {
//   results: GeocodingResult[];
// }

export const geocodingApi = createApi({
  reducerPath: 'geocodingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_GEOCODING_API_URL,
  }),
  endpoints: (builder) => ({
    getCoordinatesByCityName: builder.query<GeocodingResult, string>({
      query: (cityName) => ({
        url: '/',
        params: {
          q: cityName,
          key: import.meta.env.VITE_GEOCODING_API_KEY,
          limit: 5,
          no_annotations: 1,
          // language: 'en',
        },
      }),
      // transformResponse: (response: GeocodingResponse) => response.results,
      // Обработка ошибок
    }),
  }),
});

export const {
  useGetCoordinatesByCityNameQuery,
  useLazyGetCoordinatesByCityNameQuery,
} = geocodingApi;
