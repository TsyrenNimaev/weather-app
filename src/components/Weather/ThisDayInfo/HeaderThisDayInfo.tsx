import React from 'react';

import { GlobalSvgSelector } from '../../../assets/global/GlobalSvgSelector';
import { editDesc, getTime } from '../../../assets/indicator/IndicatorSvgSelector';

import styles from './ThisDayInfo.module.scss';

interface Props {
  name: string;
  country: string;
  timezone: number;
  description: string;
  icon: string;
  coord: {
    lat: number;
    lon: number;
  };
}

export const HeaderThisDayInfo = ({ name, country, coord, timezone, description, icon }: Props) => {
  const { lat, lon } = coord;
  const localTime = getTime(timezone)[0].split(':');

  return (
    <div className={styles.city__info_wrapper}>
      <div className={styles.city__info}>
        <div>
          City: <span>{name}</span>
        </div>
        <div>
          Country: <span>{country}</span>
        </div>
        <div>
          Local time:{' '}
          <span>
            {localTime[0]}:{localTime[1]} GMT {timezone / 3600 > 0 ? '+' + timezone / 3600 : timezone / 3600}
          </span>
        </div>
        <div>
          Coordinates:{' '}
          <span>
            {lat}° latitude &mdash; {lon}° longitude
          </span>
        </div>
      </div>
      <div className={styles.icon__info}>
        <GlobalSvgSelector id={icon} />
        <span>{editDesc(description)}</span>
      </div>
    </div>
  );
};
