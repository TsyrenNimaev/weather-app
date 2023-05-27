import React from 'react';

import { BackgroundIndicator } from '../../../assets/indicator/BackgroundIndicator';

import styles from './ThisDayInfo.module.scss';

interface Props {
  id: string;
}

export const ThisDayInfoBackground = ({ id }: Props) => {
  return (
    <div className={styles.info__background}>
      <BackgroundIndicator id={id} />
    </div>
  );
};
