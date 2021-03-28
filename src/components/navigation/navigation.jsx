import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Navigation = ({authStatus, user}) => {
  return <nav className="header__nav">
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <a href="/favorites" className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            {authStatus && <img className="header__ avater user__avatar" src={user.avatar_url} width="20" height="20" />}
          </div>
          {authStatus
            ? <span className="header__user-name user__name">{user.email}</span>
            : <span className="header__login">Sign in</span>
          }
        </a>
      </li>
    </ul>
  </nav>;
};

Navigation.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  user: PropTypes.object
};

const mapStateToProps = (state) => ({
  authStatus: state.authStatus,
  user: state.user
});

export {Navigation};
export default connect(mapStateToProps, null)(Navigation);
