import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

import { WeatherData } from '../../../store/types/types';
import { ThisDayItem } from './ThisDayItem';
import { Days } from '../Days';
import { HeaderThisDayInfo } from './HeaderThisDayInfo';
import { IndicatorSvgSelector, sunsetSunrise, windDirection } from '../../../assets/indicator/IndicatorSvgSelector';

import styles from './ThisDayInfo.module.scss';
import cloud from '../../../assets/images/cloud.png';
import axios from 'axios';
// import { BackgroundIndicator } from '../../../assets/indicator/BackgroundIndicator';
// import { ThisDayInfoBackground } from './ThisDayInfoBackground';

interface Props {
  weather: WeatherData;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = ({ weather }: Props) => {
  const { temp, feels_like, pressure, humidity, temp_min, temp_max, sea_level, grnd_level } = weather.list[0].main;
  const { speed, deg, gust } = weather.list[0].wind;
  const { sunrise, sunset, name, timezone, country } = weather.city;
  const { visibility, dt } = weather.list[0];
  const { all } = weather.list[0].clouds;
  const { icon, description, main } = weather.list[0].weather[0];

  // const gustWind = gust === undefined ? 0 : gust;
  const sunriseTime = sunsetSunrise(sunrise, timezone)[0].split(':');
  const sunsetTime = sunsetSunrise(sunset, timezone)[0].split(':');

  console.log(weather.list);

  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: `${Math.floor(temp)}° C - feels like ${Math.floor(feels_like)}° C`,
    },
    {
      icon_id: 'temp_min',
      name: 'Min temperature',
      value: `${Math.floor(temp_min)}° C`,
    },
    {
      icon_id: 'temp_max',
      name: 'Max temperature',
      value: `${Math.floor(temp_max)}° C`,
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: `${pressure} hPa`,
    },
    {
      icon_id: 'sea_level',
      name: 'Pressure on the sea level',
      value: `${sea_level} hPa`,
    },
    {
      icon_id: 'grnd_level',
      name: 'Pressure on the ground level',
      value: `${grnd_level} hPa`,
    },
    {
      icon_id: 'humidity',
      name: 'Humidity',
      value: `${humidity}%`,
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: `${speed} m/s - ${windDirection(deg)}`,
    },
    {
      icon_id: 'gusts_wind',
      name: 'Gusts of wind',
      value: `${gust} m/s`,
    },
    {
      icon_id: 'visibility',
      name: 'Visibility',
      value: `${visibility} m`,
    },
    {
      icon_id: 'clouds',
      name: 'Clouds',
      value: `${all}%`,
    },
  ];

  const hours = (sunset - sunrise) / 3600;
  const now = (sunset - dt) / 3600;
  const progress = (now * 100) / hours;

  return (
    <>
      <div className={styles.this__day_info}>
        {/* <ThisDayInfoBackground id="Clouds" /> */}
        <HeaderThisDayInfo
          name={name}
          country={country}
          timezone={timezone}
          description={description}
          icon={icon}
          coord={weather.city.coord}
        />
        <div className={styles.this__day_items}>
          {items.map((item: Item) => {
            return <ThisDayItem key={item.icon_id} item={item} />;
          })}
        </div>
        <img src={cloud} className={styles.this__day_img} alt="cloud" />
        <div className={styles.suntime}>
          <div className={styles.progressbar__wrapper}>
            <ProgressBar
              radius={220}
              progress={progress}
              cut={180}
              rotate={180}
              trackStrokeWidth={2}
              strokeWidth={4}
              strokeColor="#ffcc33"
              pointerRadius={6}
              pointerStrokeWidth={1}
              pointerStrokeColor="#ffcc33"
              inverse
            />
          </div>
          <div className={styles.suntime__icon}>
            <span>
              {sunriseTime[0]}:{sunriseTime[1]}
              <IndicatorSvgSelector id="sunrise" />
            </span>
            <span>
              {sunsetTime[0]}:{sunsetTime[1]}
              <IndicatorSvgSelector id="sunset" />
            </span>
          </div>
        </div>
      </div>
      <Days weather={weather} />
    </>
  );
};
