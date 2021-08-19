/* eslint-disable no-trailing-spaces */
import '../styles/App.css';
import React, { useState, useEffect } from 'react';
import getForecast from '../Requests/getForecast';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import SearchForm from './Search';

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );

  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCitySearch = () => {
    getForecast(
      searchText, 
      setSelectedDate, 
      setForecasts, 
      setLocation, 
      setErrorMessage,
    );
  };

  function handleForecastSelect(date) {
    setSelectedDate(date);
  }
  
  useEffect(() => {
    getForecast(
      searchText,
      setSelectedDate, 
      setForecasts, 
      setLocation, 
      setErrorMessage,
    );
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails 
        city={location.city} 
        country={location.country} 
        errorMessage={errorMessage}
      
      />
      <SearchForm 
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      {!errorMessage && (
      <>
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </>
      )}
    </div>
  );
};

export default App;
