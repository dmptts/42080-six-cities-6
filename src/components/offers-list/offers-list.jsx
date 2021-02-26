import React, {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import {offersPropTypes} from '../../utils';

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

OffersList.propTypes = {offers: offersPropTypes};

export default OffersList;
