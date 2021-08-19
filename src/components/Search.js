import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchForm.css';

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input className="search-form-text" type="text" placeholder="Search Location Here" onChange={handleInputChange} value={searchText} />
      <button className="submit" type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
