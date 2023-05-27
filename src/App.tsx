import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
// import { MonthStatistics } from './components/MonthStatistics';
import { Header } from './components/Header';
import { Popup } from './components/Weather/Popup';
import { ThisDayInfo } from './components/Weather/ThisDayInfo';
import { useCustomSelector } from './hooks/store';
// import { currenrtWeatherSlice } from './store/slices/currentWeatherSlice';
import { selectCurrentWeatherData } from './store/selectors';
// import axios from 'axios';

const App = () => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  return (
    <>
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/month-statistics' element={<MonthStatistics />}/> */}
          <Route path="/details" element={<ThisDayInfo weather={weather} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
