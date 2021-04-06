import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchNearbyOffers, fetchOfferById, fetchReviews} from '../../store/api-actions';
import PropTypes from 'prop-types';
import Navigation from '../navigation/navigation';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import LoadingScreen from '../loading-screen/loading-screen';
import Gallery from '../gallery/gallery';
import OfferInfo from '../offer-info/offer-info';
import reviewsPropTypes from '../reviews-list/reviews-list.prop';
import offerPropTypes from './offer.prop';
import offersPropTypes from '../offers-list/offers-list.prop';
import {AppRoutes} from '../../const';
import {getNearbyOffers, getOffer, getOfferLoadStatus, getReviews} from '../../store/data/selectors';
import {resetOfferData, setActiveCard} from '../../store/actions';

const Offer = ({isOfferDataLoaded, offer, reviews, nearbyOffers, onLoadData, onDataLoaded, onUnmount}) => {
  const URLparams = useParams();
  const offerID = Number(URLparams.offerID);

  useEffect(() => {
    onLoadData(offerID);

    return () => {
      onUnmount();
    };
  }, []);

  useEffect(() => {
    if (isOfferDataLoaded) {
      onDataLoaded(offer);
    }
  }, [isOfferDataLoaded]);

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoutes.ROOT} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        {isOfferDataLoaded ? <React.Fragment>
          <section className="property">
            <Gallery offer={offer} />
            <div className="property__container container">
              <div className="property__wrapper">
                <OfferInfo offer={offer} />
                <ReviewsList reviews={reviews} offerID={offerID}/>
              </div>
            </div>
            <Map className={`property__map`} offers={nearbyOffers} currentOffer={offer} />
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
  isOfferDataLoaded: PropTypes.bool.isRequired,
  offer: offerPropTypes,
  nearbyOffers: offersPropTypes,
  reviews: reviewsPropTypes,
  onLoadData: PropTypes.func.isRequired,
  onDataLoaded: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isOfferDataLoaded: getOfferLoadStatus(state),
  offer: getOffer(state),
  reviews: getReviews(state),
  nearbyOffers: getNearbyOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchOfferById(id));
    dispatch(fetchReviews(id));
    dispatch(fetchNearbyOffers(id));
  },

  onDataLoaded(offer) {
    dispatch(setActiveCard(offer));
  },

  onUnmount() {
    dispatch(resetOfferData());
  }
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
