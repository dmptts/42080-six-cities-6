import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchNearbyOffers, fetchOfferById} from '../../store/api-actions';
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

const Offer = ({isOfferLoaded, offer, nearbyOffers, onLoadData}) => {
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
              <Link to={AppRoutes.ROOT} className="header__logo-link">
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
            <Gallery offer={offer} />
            <div className="property__container container">
              <div className="property__wrapper">
                <OfferInfo offer={offer} />
                <ReviewsList offerID={offerID} />
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

const mapStateToProps = ({DATA}) => ({
  isOfferLoaded: DATA.isOfferLoaded,
  offer: DATA.offer,
  nearbyOffers: DATA.nearbyOffers
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchOfferById(id));
    dispatch(fetchNearbyOffers(id));
  }
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
