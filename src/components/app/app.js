import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import NotFound from '../not-found/not-found';

const App = (props) => {
  const {placeCardCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main placeCardCount={placeCardCount} />;
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/offer/:id?" exact>
          <Offer />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placeCardCount: PropTypes.number.isRequired
};

export default App;
