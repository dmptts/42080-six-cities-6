import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offersPropTypes from '../offers-list/offers-list.prop';
import {connect} from 'react-redux';
import {sortOffers} from '../../utils';
import {SortingTypes} from '../../const';

const OffersList = (props) => {
  const {listClasses, cardClasses, offers, currentCity, sortingType} = props;

  const sortedOffers = (sortingType === SortingTypes.POPULARITY_DESCENDING) ? offers : sortOffers(offers.slice(), sortingType);

  return <div className={`${listClasses} places__list`}>
    {sortedOffers.map((offer) => offer.city === currentCity &&
      <OfferCard
        cardClasses={cardClasses}
        key={offer.id}
        offer={offer}
      />
    )}
  </div>;
};

OffersList.propTypes = {
  listClasses: PropTypes.string.isRequired,
  cardClasses: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  sortingType: PropTypes.string.isRequired,
  offers: offersPropTypes
};

const mapStateToProps = ({INTERFACE}) => ({
  currentCity: INTERFACE.city,
  sortingType: INTERFACE.sortingType,
});

export default connect(mapStateToProps, null)(OffersList);
