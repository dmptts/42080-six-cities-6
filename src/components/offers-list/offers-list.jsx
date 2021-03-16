import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offersPropTypes from '../offers-list/offers-list.prop';
import {connect} from 'react-redux';

const OffersList = (props) => {
  const {listClasses, cardClasses, offers} = props;
  const [, setActiveCard] = useState(null);

  return <div className={`${listClasses} places__list`}>
    {offers.map((offer) =>
      <OfferCard
        cardClasses={cardClasses}
        key={offer.id}
        offer={offer}
        setActiveCard={setActiveCard}
      />
    )}
  </div>;
};

OffersList.propTypes = {
  listClasses: PropTypes.string.isRequired,
  cardClasses: PropTypes.string.isRequired,
  offers: offersPropTypes
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

export default connect(mapStateToProps, null)(OffersList);
