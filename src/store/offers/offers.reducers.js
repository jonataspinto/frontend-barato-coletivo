import { OFFERS_TYPES } from '../actionsTypes';

const TYPES = OFFERS_TYPES;

const initialStateOffers = {
  offers: [],
  offer: {},
  categories: [],
  loading: false,
  message: null,
};

const offerReducers = (state = initialStateOffers, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_OFFERS:
      return {
        ...state,
        loading: action.loading,
      };
    case TYPES.GET_ALL_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.offers,
        categories: action.categories,
        loading: action.loading,
      };
    case TYPES.GET_ALL_OFFERS_FAIL:
      return {
        message: action.error,
      };

    case TYPES.GET_UNIQUE_OFFER:
      return {
        ...state,
        loading: action.loading,
      };
    case TYPES.GET_UNIQUE_OFFER_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        offer: action.offer,
      };
    default:
      return state;
  }
};

export default offerReducers;
