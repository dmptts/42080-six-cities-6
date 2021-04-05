import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchFavorites, postFavorite} from '../../store/api-actions';
import offerPropTypes from '../offer/offer.prop';
import {AppRoutes} from '../../const';
import {Link} from 'react-router-dom';

const FavoriteCard = ({offer, onFavoriteClick}) => {
  const {id, previewImage, price, isFavorite, rating, title, type} = offer;

  return <article className="favorites__card place-card">
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to={`${AppRoutes.OFFER}/${id}`}>
        <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
      </Link>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className="place-card__bookmark-button place-card__bookmark-button--active button"
          type="button"
          onClick={() => {
            onFavoriteClick(Number(!isFavorite), id);
          }}
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: Math.round(rating) * 20 + `%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`${AppRoutes.OFFER}/${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
    </div>
  </article>;
};

FavoriteCard.propTypes = {
  offer: offerPropTypes,
  onFavoriteClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick: (status, id) => {
    dispatch(postFavorite(status, id));
    dispatch(fetchFavorites());
  }
});

export {FavoriteCard};
export default connect(null, mapDispatchToProps)(FavoriteCard);
