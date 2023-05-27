import React, { FC } from 'react';
import uniqid from 'uniqid';

import styles from './Days.module.scss';
import { Cards } from './Cards';
import { WeatherData } from '../../../store/types/types';
// import { Tabs } from './Tabs';
interface Props {
  weather: WeatherData;
}

export interface Day {
  time: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = ({ weather }: Props) => {
  const days: Day[] = [
    {
      time: `${weather.list[1].dt_txt.split(' ')[1].split(':')[0]} : ${
        weather.list[1].dt_txt.split(' ')[1].split(':')[1]
      }`,
      icon_id: `${weather.list[1].weather[0].icon}`,
      temp_day: `${Math.floor(weather.list[0].main.temp_max)}° C`,
      temp_night: `${Math.floor(weather.list[0].main.temp_min)}° C`,
      info: `${weather.list[1].weather[0].main}`,
    },
    {
      time: `${weather.list[2].dt_txt.split(' ')[1].split(':')[0]} : ${
        weather.list[2].dt_txt.split(' ')[1].split(':')[1]
      }`,
      icon_id: `${weather.list[2].weather[0].icon}`,
      temp_day: `${Math.floor(weather.list[1].main.temp_max)}° C`,
      temp_night: `${Math.floor(weather.list[1].main.temp_min)}° C`,
      info: `${weather.list[2].weather[0].main}`,
    },
    {
      time: `${weather.list[3].dt_txt.split(' ')[1].split(':')[0]} : ${
        weather.list[3].dt_txt.split(' ')[1].split(':')[1]
      }`,
      icon_id: `${weather.list[3].weather[0].icon}`,
      temp_day: `${Math.floor(weather.list[2].main.temp_max)}° C`,
      temp_night: `${Math.floor(weather.list[2].main.temp_min)}° C`,
      info: `${weather.list[3].weather[0].main}`,
    },
    {
      time: `${weather.list[4].dt_txt.split(' ')[1].split(':')[0]} : ${
        weather.list[4].dt_txt.split(' ')[1].split(':')[1]
      }`,
      icon_id: `${weather.list[4].weather[0].icon}`,
      temp_day: `${Math.floor(weather.list[3].main.temp_max)}° C`,
      temp_night: `${Math.floor(weather.list[3].main.temp_min)}° C`,
      info: `${weather.list[4].weather[0].main}`,
    },
    {
      time: `${weather.list[5].dt_txt.split(' ')[1].split(':')[0]} : ${
        weather.list[5].dt_txt.split(' ')[1].split(':')[1]
      }`,
      icon_id: `${weather.list[5].weather[0].icon}`,
      temp_day: `${Math.floor(weather.list[4].main.temp_max)}° C`,
      temp_night: `${Math.floor(weather.list[4].main.temp_min)}° C`,
      info: `${weather.list[5].weather[0].main}`,
    },
    {
      time: `${weather.list[6].dt_txt.split(' ')[1].split(':')[0]} : ${
        weather.list[6].dt_txt.split(' ')[1].split(':')[1]
      }`,
      icon_id: `${weather.list[6].weather[0].icon}`,
      temp_day: `${Math.floor(weather.list[5].main.temp_max)}° C`,
      temp_night: `${Math.floor(weather.list[5].main.temp_min)}° C`,
      info: `${weather.list[6].weather[0].main}`,
    },
    {
      time: `${weather.list[7].dt_txt.split(' ')[1].split(':')[0]} : ${
        weather.list[7].dt_txt.split(' ')[1].split(':')[1]
      }`,
      icon_id: `${weather.list[7].weather[0].icon}`,
      temp_day: `${Math.floor(weather.list[6].main.temp_max)}° C`,
      temp_night: `${Math.floor(weather.list[6].main.temp_min)}° C`,
      info: `${weather.list[7].weather[0].main}`,
    },
    {
      time: `${weather.list[8].dt_txt.split(' ')[1].split(':')[0]} : ${
        weather.list[8].dt_txt.split(' ')[1].split(':')[1]
      }`,
      icon_id: `${weather.list[8].weather[0].icon}`,
      temp_day: `${Math.floor(weather.list[7].main.temp_max)}° C`,
      temp_night: `${Math.floor(weather.list[7].main.temp_min)}° C`,
      info: `${weather.list[8].weather[0].main}`,
    },
  ];
  return (
    <>
      {/* <Tabs /> */}
      <div className={styles.days}>
        {days.map((day: Day) => {
          return <Cards key={uniqid()} days={day} />;
        })}
      </div>
    </>
  );
};
