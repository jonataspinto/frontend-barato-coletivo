// import * as api from '../../services/api';
import { SHOPPING_CART_TYPES } from '../actionsTypes';

const TYPES = SHOPPING_CART_TYPES;

export const getShoppingCart = () => async dispatch => {
  dispatch({
    type: TYPES.GET_SHOPPING_CART,
    loading: true,
  });
};
