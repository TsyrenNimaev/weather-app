import React from 'react';
import { Item } from './ThisDayInfo';

import styles from './ThisDayInfo.module.scss';
import { IndicatorSvgSelector } from '../../../assets/indicator/IndicatorSvgSelector';

interface Props {
  item: Item;
}

export const ThisDayItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;

  return (
    <ul className={styles.list}>
      <li className={styles.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </li>
      <li className={styles.indicator__name}>{name}</li>
      <li className={styles.indicator__value}>{value}</li>
    </ul>
  );
};
