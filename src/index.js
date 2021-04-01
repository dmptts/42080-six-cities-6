import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './store/root-reducer';
import {createAPI} from './store/api';
import {redirect} from './store/middlewares/redirect';
import App from './components/app/app';
import {fetchOffers, requireAuth} from './store/api-actions';

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(requireAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
