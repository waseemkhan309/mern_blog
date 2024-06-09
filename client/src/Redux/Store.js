import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './Reducers';

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
)

export default Store;