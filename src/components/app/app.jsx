import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../not-found/not-found';
import offersPropTypes from '../offers-list/offers-list.prop';
import {AppRoutes, Cities} from '../../const';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={AppRoutes.ROOT} exact>
          <Main cities={Cities}/>;
        </Route>
        <Route path={AppRoutes.LOGIN} exact>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoutes.FAVORITES}
          render={() => <Favorites />}
        >
        </PrivateRoute>
        <Route path={`${AppRoutes.OFFER}/:offerID`} exact >
          <Offer />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: offersPropTypes
};

export default App;
