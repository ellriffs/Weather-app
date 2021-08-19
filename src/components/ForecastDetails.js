import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from "react-icons-weather";
import moment from 'moment';
import '../styles/ForecastDetails.css';

const ForecastDetails = ({ forecast }) => {
  const {
    date, temperature, humidity, wind, icon, description,
  } = forecast;
  return (
    <div className="forecast-details-container">
      <div className="forecast-details">
        <div className="forecast-details_date">{moment(date).format("dddd Do MMM YYYY")}</div>
        <div className="forecast-details_temperature-max">
          {"Max Temp: "}
          {temperature.max}
          {"°C"}
        </div>
        <div className="forecast-details_temperature-min">
          {"Min Temp: "}
          {temperature.min}
          {"°C"}
        </div>
        <div className="forecast-details_humidity">
          {"Humidity: "}
          {humidity}
          {" %"}
        </div>
        <div className="forecast-details_wind">
          {"Wind Speed: "}
          {wind.speed}
          {" Km/h"}
        </div>
        <div className="forecast-details_description">{description}</div>
        <div className="forecast-summary_icon-container" data-testid="forecast-icon">
          <WeatherIcon name="owm" iconId={icon} />
        </div>
      </div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
