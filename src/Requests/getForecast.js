/* eslint-disable no-console */
import axios from 'axios';

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage,
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
      setErrorMessage();
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Oops! No such place exists in the UK. Please check your spelling or try again!");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops, it looks like there is a server error, please try again later.");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
