import { SHOPPING_CART_TYPES } from '../actionsTypes';

const TYPES = SHOPPING_CART_TYPES;

const initialState = {
  products: [],
  loading: false,
};

// rever actions para esse reducer

const shoppingCartReducers = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_SHOPPING_CART:
      return {
        ...state,
        loading: action.loading,
      };
    case TYPES.GET_SHOPPING_CART_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        cart: action.cart,
      };
    default:
      return state;
  }
};

export default shoppingCartReducers;
