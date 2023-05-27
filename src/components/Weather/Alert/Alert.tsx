import React, { FC } from 'react';

import styles from './Alert.module.scss';

interface AlertProps {
  message: string;
  onClose: () => void;
}

export const Alert: FC<AlertProps> = ({}) => {
  return <div className={styles.alert}></div>;
};
