import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './ForecastSummary';
import '../styles/ForecastSummaries.css';

const ForecastSummaries = ({ forecasts, onForecastSelect }) => (
  <div className="forecast-summaries">
    {forecasts.map((forecast) => (
      <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        onSelect={onForecastSelect}
        temperature={forecast.temperature}
      />
    ))}
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }).isRequired,
    }),
  ).isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;
