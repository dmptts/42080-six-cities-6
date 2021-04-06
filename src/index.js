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
import {requireAuth} from './store/api-actions';
import {checkAuthStatus} from './store/actions';

const api = createAPI(() => store.dispatch(checkAuthStatus(false)));

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(requireAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
