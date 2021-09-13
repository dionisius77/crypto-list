import CryptoTypes from "./crypto.types";

const INIT_STATE = {
  cryptoList: null,
  error: false,
  loading: false,
  icons: null,
};

const CryptoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CryptoTypes.GET_CRYPTO:
      return {
        ...state,
        cryptoList: null,
        error: false,
        loading: true,
      };
    case CryptoTypes.GET_CRYPTO_SUCCESS:
      return {
        ...state,
        cryptoList: action.payload,
        error: false,
        loading: false,
      };
    case CryptoTypes.GET_CRYPTO_FAILURE:
      return {
        ...state,
        cryptoList: null,
        error: true,
        loading: false,
      };
    case CryptoTypes.GET_ICONS:
      return {
        ...state,
        icons: null,
      };
    case CryptoTypes.GET_ICONS_SUCCESS:
      return {
        ...state,
        icons: action.payload,
      };
    case CryptoTypes.GET_ICONS_FAILURE:
      return {
        ...state,
        icons: null,
      };
    default:
      return state;
  }
};
export default CryptoReducer;
