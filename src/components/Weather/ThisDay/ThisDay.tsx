import React from 'react';
import { Link } from 'react-router-dom';

import { GlobalSvgSelector } from '../../../assets/global/GlobalSvgSelector';
import { Search } from '../../Search';
import { editDesc, getTime } from '../../../assets/indicator/IndicatorSvgSelector';
import { useCustomSelector } from '../../../hooks/store';
import { selectCurrentWeatherData } from '../../../store/selectors';
import { Loading } from '../Loading';
// import { WeatherData } from '../../../store/types/types';

import styles from './ThisDay.module.scss';

interface Props {
  // weather: WeatherData;
  // isLoading: boolean;
}

export const ThisDay = ({}: Props) => {
  const { weather, isLoading } = useCustomSelector(selectCurrentWeatherData);

  const { name, timezone, country } = weather.city;
  const { icon, description } = weather.list[0].weather[0];
  const { temp } = weather.list[0].main;

  const localTime = getTime(timezone)[0].split(':');

  return (
    <div className={styles.this__day} data-testid={styles.this__day}>
      <Search />
      {!name ? (
        <div className={styles.empty__container}>{isLoading && <Loading />}</div>
      ) : (
        <>
          <div className={styles.top__block}>
            <div className={styles.top__block_wrapper}>
              <div className={styles.this__temp}>
                <span>{Math.floor(temp)}&#176; C</span>
              </div>
              <div className={styles.this__day_name}>
                Today
                <span className={styles.local__time}>
                  {localTime[0]} : {localTime[1]}
                </span>
              </div>
            </div>
            <div className={styles.icon__wrapper}>
              <GlobalSvgSelector id={icon} />
              <span>{editDesc(description)}</span>
            </div>
          </div>
          <div className={styles.bottom__block}>
            <div>
              <div className={styles.this__time}>
                Country: <span>{country}</span>
              </div>
              <div className={styles.this__city}>
                City: <span>{name}</span>
              </div>
            </div>
            <Link to="details" className={styles.details__link}>
              Details
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
