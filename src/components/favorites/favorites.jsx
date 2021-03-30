import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';
import {Cities} from '../../const';
import offersPropTypes from '../offers-list/offers-list.prop';
import {Navigation} from '../navigation/navigation';

const Favorites = ({isOffersLoaded, offers}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoritesCities = favoriteOffers.map((offer) => offer.city);
  const favoritesCitiesInOrder = Cities.filter((city) => favoritesCities.includes(city)); // Позволяет сохранить последовательность городов в соответсвие с главной страницей

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        {isOffersLoaded ? <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                favoritesCitiesInOrder.map((city) => {
                  return <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        favoriteOffers.map((offer) => {
                          return (city === offer.city) ? <article className="favorites__card place-card" key={offer.id}>
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <a href="#">
                                <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
                              </a>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">&euro;{offer.price}</b>
                                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                                </div>
                                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                  <svg className="place-card__bookmark-icon" width="18" height="19">
                                    <use xlinkHref="#icon-bookmark"></use>
                                  </svg>
                                  <span className="visually-hidden">In bookmarks</span>
                                </button>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: Math.round(offer.rating) * 20 + `%`}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <a href="#">{offer.title}</a>
                              </h2>
                              <p className="place-card__type">{offer.type[0].toUpperCase() + offer.type.slice(1)}</p>
                            </div>
                          </article> : ``;
                        })
                      }
                    </div>
                  </li>;
                })
              }
            </ul>
          </section>
        </div> : <LoadingScreen />}
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to={`/`}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </React.Fragment>
  );
};

Favorites.propTypes = {
  isOffersLoaded: PropTypes.bool.isRequired,
  offers: offersPropTypes
};

const mapStateToProps = (state) => ({
  isOffersLoaded: state.isOffersLoaded,
  offers: state.offers
});

export {Favorites};
export default connect(mapStateToProps, null)(Favorites);
