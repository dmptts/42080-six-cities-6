import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchOffers} from '../../store/api-actions';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';
import Navigation from '../navigation/navigation';
import CitiesList from '../cities-list/cities-list';
import citiesPropTypes from '../cities-list/cities-list.prop';
import {getOffersLoadStatus} from '../../store/data/selectors';
import CityOffers from '../city-offers/city-offers';

const Main = (props) => {
  const {isOffersLoaded, onLoadData, cities} = props;

  useEffect(() => {
    if (!isOffersLoaded) {
      onLoadData();
    }
  }, [isOffersLoaded]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities} />
          </section>
        </div>
        <div className="cities">
          {isOffersLoaded ? <CityOffers /> : <LoadingScreen />}
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  cities: citiesPropTypes,
  isOffersLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isOffersLoaded: getOffersLoadStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
