import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../not-found/not-found';
import offersPropTypes from '../offers-list/offers-list.prop';
import reviewsPropTypes from '../reviews-list/reviews-list.prop';
import {Cities} from '../../const';

const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main cities={Cities}/>;
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path="/favorites"
          render={() => <Favorites />}
        >
        </PrivateRoute>
        <Route path="/offer/:id?" exact>
          <Offer offers={offers} reviews={reviews} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: offersPropTypes,
  reviews: reviewsPropTypes
};

export default App;
