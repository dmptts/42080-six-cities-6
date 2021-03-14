import React from 'react';
import citiesPropTypes from './cities-list.prop';

const CitiesList = (props) => {
  const {cities} = props;

  return <ul className="locations__list tabs__list">
    {cities.map((city) => <li key={city} className="locations__item">
      <a className="locations__item-link tabs__item">
        <span>{city}</span>
      </a>
    </li>
    )}
  </ul>;
};

CitiesList.propTypes = {
  cities: citiesPropTypes
};

export default CitiesList;
