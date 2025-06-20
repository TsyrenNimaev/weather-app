import { useGetForecastQuery } from '@/api/weatherApi';
import { format, fromUnixTime } from 'date-fns';
import { ru } from 'date-fns/locale';

import styles from './WeatherForecast.module.scss';
import type { WeatherData } from '@/api/weatherTypes';

interface WeatherForecastProps {
  lat: number;
  lon: number;
}

type DailyForecast = Record<string, WeatherData[]>;

const WeatherForecast = ({ lat, lon }: WeatherForecastProps) => {
  const { data, isLoading, isError } = useGetForecastQuery({ lat, lon });

  if (isLoading) return <div>Loading forecast...</div>;
  if (isError) return <div>Error loading forecast</div>;
  if (!data) return null;

  //Групируем прогноз по дням
  const dailyForecast = data.list.reduce(
    (acc: DailyForecast, item: WeatherData) => {
      const date = format(fromUnixTime(item.dt), 'yyyy-MM-dd');
      acc[date] = acc[date] || [];
      acc[date].push(item);
      return acc;
    },
    {}
  );

  return (
    <div className={styles.forecastContainer}>
      <h3>Прогноз на 5 дней</h3>
      <div className={styles.forecastGrid}>
        {Object.keys(dailyForecast)
          .slice(0, 5)
          .map((date) => {
            const dayData = dailyForecast[date];
            const minTemp = Math.min(...dayData.map((d) => d.main.temp_min));
            const maxTemp = Math.max(...dayData.map((d) => d.main.temp_max));
            const dayName = format(new Date(date), 'EEEE', { locale: ru });

            return (
              <div key={date} className={styles.forecastDay}>
                <div className={styles.dayName}>{dayName}</div>
                <img
                  src={`https://openweathermap.org/img/wn/${dayData[0].weather[0].icon}.png`}
                  alt={dayData[0].weather[0].description}
                />
                <div className={styles.temps}>
                  <span>{Math.round(maxTemp)} °</span>
                  <span className={styles.lowTemp}>
                    {Math.round(minTemp)} °
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WeatherForecast;
