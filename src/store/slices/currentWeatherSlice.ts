import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WeatherData } from '../types/types';
import { AxiosResponse } from 'axios';

type CurrentWeather = {
  weather: WeatherData
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: CurrentWeather = {
  weather: {
    city: {
        coord: {
        lat: 0,
        lon: 0,
        },
      country: '',
      id: 0,
      name: '',
      sunrise: 0,
      sunset: 0,
      timezone: 0,
    },
    list: [
      {
        dt_txt: '',
        clouds: {
          all: 0,
        },
        dt: 0,
        main: {
          feels_like: 0,
          grnd_level: 0,
          humidity: 0,
          pressure: 0,
          sea_level: 0,
          temp: 0,
          temp_max: 0,
          temp_min: 0,
        },
        pop: 0,
        visibility: 0,
        weather: [
          {
            id: 0,
            main: '',
            description: '',
            icon: '',
          },
        ],
        wind: {
          speed: 0,
          deg: 0,
          gust: 0,
        },
      },
    ],
  },
  isLoading: false,
  response: {
    status: 0,
    message: ''
  }
};

export const currenrtWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentThisDay(state) {
      state.isLoading = true;
    },

    fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<WeatherData>>) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },

    fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<WeatherData>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    }
  }
});

export default currenrtWeatherSlice.reducer;