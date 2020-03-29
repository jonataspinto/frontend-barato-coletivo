import * as api from '../../services/api';
import { OFFERS_TYPES } from '../actionsTypes';

const TYPES = OFFERS_TYPES;

export const getAll = () => async dispatch => {
  dispatch({
    type: TYPES.GET_ALL_OFFERS,
    loading: true,
  });
  try {
    const { data, categories } = await api.getAllOffers();
    dispatch({
      type: TYPES.GET_ALL_OFFERS_SUCCESS,
      offers: data,
      categories,
      loading: false,
    });
  } catch {
    dispatch({
      type: TYPES.GET_ALL_OFFERS_FAIL,
      loading: false,
    });
  }
};

export const getUniqueOffer = id => async dispatch => {
  dispatch({
    type: TYPES.GET_UNIQUE_OFFER,
    loading: true,
  });

  const response = await api.getOffer(id);

  dispatch({
    type: TYPES.GET_UNIQUE_OFFER_SUCCESS,
    loading: false,
    offer: response.data,
  });
};
