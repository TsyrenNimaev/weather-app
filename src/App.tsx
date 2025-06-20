import { useCallback, useState } from 'react';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';

function App() {
  const [selectedCoords, setSelectedCoords] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [cityName, setCityName] = useState('');

  const handleCitySelect = useCallback(
    (lat: number, lon: number, name: string) => {
      setSelectedCoords({ lat, lon });
      setCityName(name);
    },
    []
  );
  return (
    <>
      <h1>Weather App</h1>
      <SearchBar onCitySelect={handleCitySelect} />
      {/*передаем координаты в CurrentWeather только если они есть*/}
      {selectedCoords ? (
        <div>
          <CurrentWeather
            lat={selectedCoords.lat}
            lon={selectedCoords.lon}
            cityName={cityName}
          />
          <WeatherForecast lat={selectedCoords.lat} lon={selectedCoords.lon} />
        </div>
      ) : (
        <p>Please search for a city</p>
      )}
    </>
  );
}

export default App;
