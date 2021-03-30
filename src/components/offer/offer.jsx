import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../navigation/navigation';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import LoadingScreen from '../loading-screen/loading-screen';
import reviewsPropTypes from '../reviews-list/reviews-list.prop';
import offerPropTypes from './offer.prop';
import {fetchNearbyOffers, fetchOfferById} from '../../store/api-actions';
import offersPropTypes from '../offers-list/offers-list.prop';

const Offer = ({isOfferLoaded, offer, nearbyOffers, reviews, onLoadData}) => {
  const URLparams = useParams();
  const offerID = Number(URLparams.offerID);

  useEffect(() => {
    onLoadData(offerID);
  }, [offerID]);

  if (!isOfferLoaded) {
    onLoadData(offerID);
  }

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={`/`} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        {isOfferLoaded ? <React.Fragment>
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.slice(0, 6).map((image, index) => {
                  return <div
                    key={index}
                    className="property__image-wrapper"
                  >
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>;
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium && <div className="property__mark">
                  <span>Premium</span>
                </div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: Math.round(offer.rating) * 20 + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((good, index) => {
                      return <li
                        key={index}
                        className="property__inside-item"
                      >
                        {[good]}
                      </li>;
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div
                      className={`property__avatar-wrapper user__avatar-wrapper${offer.host.isPro && ` property__avatar-wrapper--pro`}`}
                    >
                      <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList offerID={offerID} />
                  <ReviewForm offerID={offerID} />
                </section>
              </div>
            </div>
            <Map className={`property__map`} offers={nearbyOffers} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList listClasses={`near-places__list`} cardClasses={`near-places__card`} offers={nearbyOffers} />
            </section>
          </div>
        </React.Fragment> : <LoadingScreen />}
      </main>
    </React.Fragment>
  );
};

Offer.propTypes = {
  isOfferLoaded: PropTypes.bool.isRequired,
  offer: offerPropTypes,
  nearbyOffers: offersPropTypes,
  reviews: reviewsPropTypes,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isOfferLoaded: state.isOfferLoaded,
  offer: state.offer,
  nearbyOffers: state.nearbyOffers,
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchOfferById(id));
    dispatch(fetchNearbyOffers(id));
  }
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
