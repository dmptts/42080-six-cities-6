import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PLACE_CARD_COUNT = 5;

ReactDOM.render(
    <App placeCardCount={PLACE_CARD_COUNT} />,
    document.querySelector(`#root`)
);
