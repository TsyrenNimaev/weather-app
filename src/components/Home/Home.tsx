import React, { FC, useEffect } from 'react';

import styles from './Home.module.scss';
import { ThisDay } from '../Weather/ThisDay';
import { ThisDayInfo } from '../Weather/ThisDayInfo';
import { Days } from '../Weather/Days';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../store/selectors';
import { Clock } from '../Clock';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  // const dispatch = useCustomDispatch();
  // const { weather, isLoading } = useCustomSelector(selectCurrentWeatherData);

  // useEffect(() => {
  //   dispatch(fetchCurrentWeather('paris'));
  // }, []);
  return (
    <div className={styles.home} data-testid="Home">
      <div className={styles.wrapper}>
        <ThisDay />
        <Clock />
      </div>
    </div>
  );
};
