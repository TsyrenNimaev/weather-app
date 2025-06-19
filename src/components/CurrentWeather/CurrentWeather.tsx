import { useGetCurrentWeatherQuery } from '@/api/weatherApi';
import { format, fromUnixTime } from 'date-fns';
// import { ru } from 'date-fns/locale';

import styles from './CurrentWeather.module.scss';

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
    <div className={styles.container}>
      <h2>{cityName}</h2>
      <div className={styles.mainInfo}>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
        />
        <div className={styles.temperature}>{Math.round(data.main.temp)}</div>
      </div>
      <p className={styles.description}>{data.weather[0].description}</p>

      <div className={styles.details}>
        <div className={styles.detailItem}>
          <span>Ощущается</span>
          <span>{Math.round(data.main.feels_like)}°</span>
        </div>
        <div className={styles.detailItem}>
          <span>Ветер</span>
          <span>{data.wind.speed} м/с</span>
        </div>
        <div className={styles.detailItem}>
          <span>Влажность</span>
          <span>{data.main.humidity} %</span>
        </div>
        <div className={styles.detailItem}>
          <span>Давление</span>
          <span>{data.main.pressure} гПа</span>
        </div>
        <div className={styles.detailItem}>
          <span>Восход</span>
          <span>{format(fromUnixTime(data.sys.sunrise), 'HH:mm')}</span>
        </div>
        <div className={styles.detailItem}>
          <span>Закат</span>
          <span>{format(fromUnixTime(data.sys.sunset), 'HH:mm')}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
