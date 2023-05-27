import { WeatherApi } from '../../services/WeatherApi';
import { currenrtWeatherSlice } from '../slices/currentWeatherSlice';
import { Dispatch } from '../store';

export const fetchCurrentWeather = (payload: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(currenrtWeatherSlice.actions.fetchCurrentThisDay());
    const response = await WeatherApi.getCurrentWeather(payload);

    if (response.status === 200) {
      dispatch(currenrtWeatherSlice.actions.fetchCurrentWeatherSuccess(response));
      
    } else {
      dispatch(currenrtWeatherSlice.actions.fetchCurrentWeatherError(response));
    }
    
  } catch (error) {
    console.log(error);
    
  }
};