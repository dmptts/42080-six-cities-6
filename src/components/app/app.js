import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  const {placeCardCount} = props;

  return <Main placeCardCount={placeCardCount} />;
};

App.propTypes = {
  placeCardCount: PropTypes.number.isRequired
};

export default App;
