import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import PropTypes from 'prop-types';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../not-found/not-found';
import {AppRoutes, Cities} from '../../const';
import {connect} from 'react-redux';
import {getInitStatus} from '../../store/user/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

const App = ({isInit}) => {
  return (isInit ?
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
        <Route path={`${AppRoutes.OFFER}/:offerID`} exact>
          <Offer />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router> : <LoadingScreen />
  );
};

App.propTypes = {
  isInit: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isInit: getInitStatus(state)
});

export {App};
export default connect(mapStateToProps, null)(App);
