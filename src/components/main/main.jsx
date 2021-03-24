import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';
import CitiesList from '../cities-list/cities-list';
import Sorting from '../sorting/sorting';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import offersPropTypes from '../offers-list/offers-list.prop';
import citiesPropTypes from '../cities-list/cities-list.prop';

const Main = (props) => {
  const {isOffersLoaded, offers, cities, currentCity} = props;

  const history = useHistory();

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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" onClick={() => history.push(`/favorites`)}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
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
          <div className="cities__places-container container">
            {isOffersLoaded ? <React.Fragment>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.filter((offer) => offer.city === currentCity).length} places to stay in Amsterdam</b>
                <Sorting />
                <OffersList listClasses={`tabs__content cities__places-list`} cardClasses={`cities__place-card`} />
              </section>
              <div className="cities__right-section">
                <Map className={`cities__map`} />
              </div>
            </React.Fragment> : <LoadingScreen />}
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: offersPropTypes,
  cities: citiesPropTypes,
  currentCity: PropTypes.string.isRequired,
  isOffersLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers,
  isOffersLoaded: state.isOffersLoaded
});

export default connect(mapStateToProps, null)(Main);
