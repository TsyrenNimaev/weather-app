// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [selectedCoords, setSelectedCoords] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [cityName, setCityName] = useState('');

  const handleCitySelect = (lat: number, lon: number, name: string) => {
    setSelectedCoords({ lat, lon });
    setCityName(name);
  };
  return (
    <>
      <h1>Weather App</h1>
      <SearchBar onCitySelect={handleCitySelect} />
      {/*передаем координаты в CurrentWeather только если они есть*/}
      {selectedCoords ? (
        <CurrentWeather
          lat={selectedCoords.lat}
          lon={selectedCoords.lon}
          cityName={cityName}
        />
      ) : (
        <p>Please search for a city</p>
      )}
    </>
  );
}

export default App;
