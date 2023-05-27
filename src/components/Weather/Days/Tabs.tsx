import React, { FC } from 'react';

import styles from './Days.module.scss';

interface TabsProps {}

export interface Tabs {
  value: string;
}

export const Tabs: FC<TabsProps> = ({}) => {
  const tabs: Tabs[] = [
    {
      value: 'For a week',
    },
    {
      value: 'For 10 days',
    },
    {
      value: 'For a month'
    }
  ];

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {tabs.map((tab: Tabs) => {
          return <div key={tab.value} className={styles.tab}>{tab.value}</div>
        })}
      </div>
      <div className={styles.cancel}>Cancel</div>
    </div>
  );
};