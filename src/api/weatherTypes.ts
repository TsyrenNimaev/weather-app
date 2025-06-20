export interface WeatherData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
}

export interface CurrentWeather extends WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  // weather: [
  //   {
  //     id: number;
  //     main: string;
  //     description: string;
  //     icon: string;
  //   }
  // ];
  // main: {
  //   temp: number;
  //   feels_like: number;
  //   temp_min: number;
  //   temp_max: number;
  //   pressure: number;
  //   humidity: number;
  // };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  // dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
}

export interface GeocodingResult {
  results: [
    {
      geometry: {
        lat: number;
        lng: number;
      };
      components: {
        city?: string;
        towm?: string;
        village?: string;
        state?: string;
        country: string;
        country_code: string;
      };
      formatted: string; // полный адрес
    }
  ];
  status: {
    code: number;
    message: string;
  };
}

export interface ForecastResponse {
  list: WeatherData[];
  city: {
    name: string;
    country: string;
    timezone: number;
  };
}
