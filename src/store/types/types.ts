export type WeatherData = {
  city: {
    coord: {
      lat: number,
      lon: number,
    },
    country: string,
    id: number,
    name: string,
    sunrise: number,
    sunset: number,
    timezone: number,
  },
  list: ListData[],
  // list: [
  //   {
  //     dt_txt: string,
  //     clouds: {
  //       all: number,
  //     },
  //     dt: number,
  //     main: {
  //       feels_like: number,
  //       grnd_level: number,
  //       humidity: number,
  //       pressure: number,
  //       sea_level: number,
  //       temp: number,
  //       temp_max: number,
  //       temp_min: number,
  //     },
  //     pop: number,
  //     visibility: number,
  //     weather: [
  //       {
  //         id: number,
  //         main: string,
  //         description: string,
  //         icon: string,
  //       },
  //     ],
  //     wind: {
  //       speed: number,
  //       deg: number,
  //       gust: number,
  //     },
  //   }
  // ],
};

type ListData = {
  dt_txt: string,
  clouds: {
    all: number,
  },
  dt: number,
  main: {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  },
  pop: number,
  visibility: number,
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string,
    },
  ],
  wind: {
    speed: number,
    deg: number,
    gust: number,
  },
};
