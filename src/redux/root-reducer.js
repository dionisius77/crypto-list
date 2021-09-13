import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import CryptoReducer from './crypto/crypto.reducer';

const persistConfig = {
  key: 'gajiku',
  storage,
};

const rootReducer = combineReducers({
  cryptos: CryptoReducer,
});

export default persistReducer(persistConfig, rootReducer);
