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
import {Cities} from '../../const';

const App = () => {
  return (
    <Router history={browserHistory}>
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
        <Route path="/offer/:offerID" exact >
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
