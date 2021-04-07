import React from 'react';
import {connect} from 'react-redux';
import {postFavorite} from '../../store/api-actions';
import PropTypes from 'prop-types';
import Host from '../host/host';
import offerPropTypes from '../offer/offer.prop';
import {updateOffer} from '../../store/actions';

const OfferInfo = ({offer, onFavoriteClick}) => {
  const {id, isPremium, isFavorite, title, rating, type, bedrooms, maxAdults, price, goods, description} = offer;

  return <React.Fragment>
    {isPremium && <div className="property__mark">
      <span>Premium</span>
    </div>}
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {title}
      </h1>
      <button
        className={`property__bookmark-button button${isFavorite ? ` property__bookmark-button--active` : ``}`}
        type="button"
        onClick={() => {
          onFavoriteClick(Number(!isFavorite), id, {
            ...offer,
            isFavorite: !isFavorite
          });
        }}
      >
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: Math.round(rating) * 20 + `%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((good, index) => {
          return <li
            key={index}
            className="property__inside-item"
          >
            {[good]}
          </li>;
        })}
      </ul>
    </div>
    <Host offer={offer} />
    <div className="property__description">
      <p className="property__text">
        {description}
      </p>
    </div>
  </React.Fragment>;
};

OfferInfo.propTypes = {
  offer: offerPropTypes,
  onFavoriteClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(status, id, offer) {
    dispatch(postFavorite(status, id));
    dispatch(updateOffer(offer));
  }
});

export {OfferInfo};
export default connect(null, mapDispatchToProps)(OfferInfo);
