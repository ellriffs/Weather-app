/* eslint-disable no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = (props) => {
  const { 
    date, description, icon, temperature, onSelect,
  } = props;

  return (
    <div className="forecast-summary">
      <div className="container">
        <div className="forecast-summary_date">{moment(date).format("dddd Do MMM YYYY")}</div>
        <div className="forecast-summary_icon" />
        <div className="forecast-summary_temperature">
          {"Temp: "}
          {temperature.max}
          {"°C "}
        </div>
        <div className="forecast-summary_description">{description}</div>
        <div className="forecast-summary_icon" data-testid="forecast-icon">
          <WeatherIcon name="owm" iconId={icon} />
        </div>
        <button type="button" className="btn" onClick={() => onSelect(date)}>More Details</button>
      </div>
    </div>
  );
};

ForecastSummary.propTypes = {
  onSelect: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
