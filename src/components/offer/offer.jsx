import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../navigation/navigation';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import LoadingScreen from '../loading-screen/loading-screen';
import offersPropTypes from '../offers-list/offers-list.prop';
import reviewsPropTypes from '../reviews-list/reviews-list.prop';

const Offer = ({path, isOffersLoaded, offers, reviews}) => {
  const offerID = Number(path.slice(7));
  const currentOffer = offers.find((offer) => offer.id === offerID);

  const history = useHistory();

  // Временное решение до связки данных о предложении со страницей
  const offersNearby = offers.slice(0, 3);

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a
                className="header__logo-link"
                onClick={() => history.push(`/`)}
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        {isOffersLoaded ? <React.Fragment>
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {currentOffer.images.slice(0, 6).map((image, index) => {
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
                {currentOffer.isPremium && <div className="property__mark">
                  <span>Premium</span>
                </div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
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
                    <span style={{width: Math.round(currentOffer.rating) * 20 + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {currentOffer.goods.map((good, index) => {
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
                      className={`property__avatar-wrapper user__avatar-wrapper${currentOffer.host.isPro && ` property__avatar-wrapper--pro`}`}
                    >
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList reviews={reviews} />
                  <ReviewForm />
                </section>
              </div>
            </div>
            <Map className={`property__map`} offers={offersNearby} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList listClasses={`near-places__list`} cardClasses={`near-places__card`} offers={offersNearby} />
            </section>
          </div>
        </React.Fragment> : <LoadingScreen />}
      </main>
    </React.Fragment>
  );
};

Offer.propTypes = {
  path: PropTypes.string.isRequired,
  isOffersLoaded: PropTypes.bool.isRequired,
  offers: offersPropTypes,
  reviews: reviewsPropTypes
};

const mapStateToProps = (state) => ({
  isOffersLoaded: state.isOffersLoaded,
  offers: state.offers
});

export {Offer};
export default connect(mapStateToProps, null)(Offer);
