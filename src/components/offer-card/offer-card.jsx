import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer/offer.prop';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions';

const OfferCard = (props) => {
  const {cardClasses, offer, onCardHover, onCardBlur} = props;
  const {id, title, previewImage, price, isPremium, type, rating} = offer;

  return (
    <article
      className={`${cardClasses} place-card`}
      onMouseEnter={() => onCardHover(offer)}
      onMouseLeave={() => onCardBlur(null)}
    >
      {isPremium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``}
      <div className={`${cardClasses}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  cardClasses: PropTypes.string.isRequired,
  offer: offerPropTypes,
  onCardHover: PropTypes.func.isRequired,
  onCardBlur: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onCardHover: (card) => {
    dispatch(ActionCreator.setActiveCard(card));
  },

  onCardBlur: () => {
    dispatch(ActionCreator.unsetActiveCard());
  }
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
