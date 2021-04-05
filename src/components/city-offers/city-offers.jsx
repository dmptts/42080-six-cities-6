import React from 'react';
import {connect} from 'react-redux';
import {getOffers} from '../../store/data/selectors';
import {getSelectedCity, getSortingType} from '../../store/interface/selectors';
import Sorting from '../sorting/sorting';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import {SortingTypes} from '../../const';
import {sortOffers} from '../../utils';
import PropTypes from 'prop-types';
import offersPropTypes from '../offers-list/offers-list.prop';
import NoOffersPlaceholder from '../main-empty/main-empty';

const CityOffers = ({initOffers, sortingType, currentCity}) => {
  let offers = initOffers.slice();

  offers = offers.filter((offer) => offer.city === currentCity);
  offers = (sortingType === SortingTypes.POPULARITY_DESCENDING) ? offers : sortOffers(offers, sortingType);

  const isOffers = offers.length !== 0;

  return isOffers ? <div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCity}</b>
      <Sorting />
      <OffersList listClasses={`tabs__content cities__places-list`} cardClasses={`cities__place-card`} offers={offers} />
    </section>
    <div className="cities__right-section">
      <Map className={`cities__map`} offers={offers} />
    </div>
  </div> : <NoOffersPlaceholder />;
};

CityOffers.propTypes = {
  initOffers: offersPropTypes,
  sortingType: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  initOffers: getOffers(state),
  sortingType: getSortingType(state),
  currentCity: getSelectedCity(state)
});

export {CityOffers};
export default connect(mapStateToProps, null)(CityOffers);
