import React, { FC } from 'react';

import styles from './Clock.module.scss';

interface ClockProps {}

export const Clock: FC<ClockProps> = ({}) => {
  return (
    <div className={styles.clock}>
      Clock Component
    </div>
  );
};


