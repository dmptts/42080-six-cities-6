import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offersPropTypes from '../offers-list/offers-list.prop';
import {connect} from 'react-redux';
import {getSelectedCity, getSortingType} from '../../store/app-interface/selectors';

const OffersList = (props) => {
  const {listClasses, cardClasses, offers} = props;

  return <div className={`${listClasses} places__list`}>
    {offers.map((offer) => <OfferCard
      cardClasses={cardClasses}
      key={offer.id}
      offer={offer}
    />)}
  </div>;
};

OffersList.propTypes = {
  listClasses: PropTypes.string.isRequired,
  cardClasses: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  sortingType: PropTypes.string.isRequired,
  offers: offersPropTypes
};

const mapStateToProps = (state) => ({
  currentCity: getSelectedCity(state),
  sortingType: getSortingType(state),
});

export default connect(mapStateToProps, null)(OffersList);
