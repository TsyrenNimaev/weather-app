import { useGetCurrentWeatherQuery } from '@/api/weatherApi';

const TEST_LAN = 50.5074;
const TEST_LON = -0.1278;

const CurrentWeather = () => {
  //тест запроса
  const { data, isLoading, isError, error } = useGetCurrentWeatherQuery({
    lat: TEST_LAN,
    lon: TEST_LON,
  });

  if (isLoading) return <div>Loading weather...</div>;
  if (isError) return <div>Error: {JSON.stringify(error)}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div>
      <h2>Current Weather</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CurrentWeather;
