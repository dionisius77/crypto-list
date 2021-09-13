import axios from "axios";
import CryptoTypes from "./crypto.types";

export const getCryptoData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: CryptoTypes.GET_CRYPTO });

      const reqCrypto = await axios({
        url: "https://data.messari.io/api/v1/assets?limit=50",
        method: "GET",
      });

      dispatch({
        type: CryptoTypes.GET_CRYPTO_SUCCESS,
        payload: reqCrypto.data.data,
      });
    } catch (error) {
      dispatch({ type: CryptoTypes.GET_CRYPTO_FAILURE, payload: error });
    }
  };
};

export const getCryptoIcons = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: CryptoTypes.GET_ICONS });

      const reqIcons = await axios({
        url: "https://api.coinstats.app/public/v1/coins",
        method: "GET",
      });

      dispatch({
        type: CryptoTypes.GET_ICONS_SUCCESS,
        payload: reqIcons.data.coins,
      });
    } catch (error) {
      dispatch({ type: CryptoTypes.GET_ICONS_FAILURE, payload: error });
    }
  };
};
