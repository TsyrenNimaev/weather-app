import React, { FC, useState, useEffect, FormEvent } from 'react';

import styles from './Search.module.scss';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
// import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { IndicatorSvgSelector } from '../../assets/indicator/IndicatorSvgSelector';

interface SearchProps {}

export const Search: FC<SearchProps> = ({}) => {
  const [city, setCity] = useState('');
  const dispatch = useCustomDispatch();

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === '') {
      return console.log('empty');
    }

    dispatch(fetchCurrentWeather(city));
    setCity('');
  };

  return (
    <form className={styles.search} onSubmit={submitHandler}>
      <input type="search" className={styles.input} placeholder="Enter city" onChange={changeHandler} value={city} />
      <button className={styles.button__search}>
        <IndicatorSvgSelector id="search" />
      </button>
    </form>
  );
};
