import React from 'react';

import { Item } from '../ThisDayInfo';
import { ThisDayItem } from '../ThisDayInfo/ThisDayItem';
import styles from './Popup.module.scss';
import { GlobalSvgSelector } from '../../../assets/global/GlobalSvgSelector';

interface PopupProps {
  items: Item[];
}

export const Popup = ({}) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: '20 - feels like 17',
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: '765 mmHg',
    },
    {
      icon_id: 'precipitation',
      name: 'Precipitation',
      value: 'No precipitation',
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: '3 m/s Southwestern',
    },
  ];

  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.day__temp}>18&#176;</div>
          <div className={styles.day__name}>Monday</div>
          <div className={styles.day__icon}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={styles.day__time}>
            Time: <span>21:00</span>
          </div>
          <div className={styles.day__city}>
            City: <span>London</span>
          </div>
        </div>
        <div className={styles.this__day_items}>
          {items.map((item: Item) => {
            return <ThisDayItem key={item.icon_id} item={item} />;
          })}
        </div>
        <div className={styles.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
