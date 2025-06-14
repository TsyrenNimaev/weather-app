// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
      <h1>Weather App</h1>
      <SearchBar />
      <CurrentWeather />
    </>
  );
}

export default App;
