import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Error-Message.css';

const LocationDetails = (props) => {
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <>
      <h1 className="Error-Message">{errorMessage}</h1>
    </>
  ) : (
    <h1 className="heading">{`${city}, ${country}`}</h1>
  );
};

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default LocationDetails;
