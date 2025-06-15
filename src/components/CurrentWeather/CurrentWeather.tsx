import { useGetCurrentWeatherQuery } from '@/api/weatherApi';

interface CurrentWeatherProps {
  lat: number;
  lon: number;
  cityName: string;
}

const CurrentWeather = ({ lat, lon, cityName }: CurrentWeatherProps) => {
  //тест запроса
  const { data, isLoading, isError, error } = useGetCurrentWeatherQuery({
    lat,
    lon,
  });

  if (isLoading) return <div>Loading weather for {cityName}...</div>;
  if (isError) return <div>Error: {JSON.stringify(error)}</div>;
  if (!data) return <div>No weather data for {cityName} </div>;

  return (
    <div>
      <h2>Current Weather</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CurrentWeather;
