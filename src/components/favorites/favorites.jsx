import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getFavoriteOffers, getFavoritesLoadStatus} from '../../store/data/selectors';
import PropTypes from 'prop-types';
import offersPropTypes from '../offers-list/offers-list.prop';
import LoadingScreen from '../loading-screen/loading-screen';
import Navigation from '../navigation/navigation';
import {AppRoutes, Cities} from '../../const';
import {fetchFavorites} from '../../store/api-actions';
import FavoriteCard from '../favorite-offer-card/favorite-offer-card';
import {resetFavorites} from '../../store/actions';

const Favorites = ({isFavoritesLoaded, favoriteOffers, onLoadData, onUnmount}) => {

  useEffect(() => {
    onLoadData();

    return () => {
      onUnmount();
    };
  }, []);

  const favoritesCities = favoriteOffers.map((offer) => offer.city);
  const favoritesCitiesInOrder = Cities.filter((city) => favoritesCities.includes(city)); // Позволяет сохранить последовательность городов в соответсвие с главной страницей

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoutes.ROOT}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        {isFavoritesLoaded ? <div className="page__favorites-container container">
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
                          return (city === offer.city) ? <FavoriteCard key={offer.id} offer={offer} /> : ``;
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
        <Link className="footer__logo-link" to={AppRoutes.ROOT}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </React.Fragment>
  );
};

Favorites.propTypes = {
  isFavoritesLoaded: PropTypes.bool.isRequired,
  favoriteOffers: offersPropTypes,
  onLoadData: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isFavoritesLoaded: getFavoritesLoadStatus(state),
  favoriteOffers: getFavoriteOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavorites());
  },

  onUnmount() {
    dispatch(resetFavorites());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
