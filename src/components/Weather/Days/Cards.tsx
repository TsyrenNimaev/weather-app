import React from 'react';

import { Day } from './Days';
import { GlobalSvgSelector } from '../../../assets/global/GlobalSvgSelector';

import styles from './Days.module.scss';

interface CardsProps {
  days: Day;
}

export const Cards = ({ days }: CardsProps) => {
  const { time, icon_id, temp_day, temp_night, info } = days;

  return (
    <div className={styles.cards}>
      {/* <div className={styles.day}>{day}</div> */}
      <div className={styles.day__info}>{time}</div>
      <div className={styles.day__icon}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={styles.day__temp_day}>{temp_day}</div>
      <div className={styles.day__temp_night}>{temp_night}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};
