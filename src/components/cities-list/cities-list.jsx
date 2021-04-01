import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCity} from '../../store/actions';
import citiesPropTypes from './cities-list.prop';

const CitiesList = (props) => {
  const {cities, currentCity, onCityClick} = props;

  return <ul className={`locations__list tabs__list`}>
    {cities.map((city) => <li
      key={city}
      className="locations__item"
      onClick={() => onCityClick(city)}
    >
      <a className={`locations__item-link tabs__item + ${currentCity === city ? ` tabs__item--active` : ``}`}>
        <span>{city}</span>
      </a>
    </li>
    )}
  </ul>;
};

CitiesList.propTypes = {
  cities: citiesPropTypes,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.city
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(changeCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
