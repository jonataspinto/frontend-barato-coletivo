import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import offerReducers from './offers/offers.reducers';
// import shoppingCartReducers from './shoppingCart/shoppingCart.reducers';

const Reducers = combineReducers({
  data: offerReducers,
  // shoppingCart: shoppingCartReducers,
});

export const store = createStore(
  Reducers,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
