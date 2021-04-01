import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AppRoutes} from '../../const';
import {getAuthStatus} from '../../store/user/selectors';

const PrivateRoute = ({render, path, exact, authStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authStatus
            ? render(routeProps)
            : <Redirect to={AppRoutes.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
