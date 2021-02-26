import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {offerPropTypes} from '../../utils';

const OfferCard = (props) => {
  const {offer, setActiveCard} = props;
  const {id, title, previewImage, price, isPremium, type, rating} = offer;

  const history = useHistory();

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => setActiveCard(offer)}
      onMouseOut={() => setActiveCard(null)}
      onClick={() => history.push(`/offer/` + id)}
    >
      {isPremium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: Math.round(rating) * 20 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a>{title}</a>
        </h2>
        <p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropTypes,
  setActiveCard: PropTypes.func.isRequired
};

export default OfferCard;
