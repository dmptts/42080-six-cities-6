import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

const OffersList = ({offers}) => {
  const [, setActiveCard] = useState(null);

  return <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) =>
      <OfferCard
        key={offer.id}
        offer={offer}
        setActiveCard={setActiveCard}
      />
    )}
  </div>;
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
