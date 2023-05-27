import React from 'react';

import day from '../images/cloudy.png';
import clear from '../images/cloud1.png';

interface Props {
  id: string;
}

export const BackgroundIndicator = ({ id }: Props) => {
  switch (id) {
    case 'Clouds':
      return <img src={day} alt="Clouds" />;
    case 'Clear':
      return <img src={clear} alt="Clear sky" />;
    default:
      return null;
  }
};
